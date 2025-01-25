const {
  getReports,
  getReportById,
  createReport,
} = require("../infrastructures/repositories/report");

const {
  get_all_employees,
} = require("../infrastructures/repositories/employee");
const {
  get_all_leave_requests,
} = require("../infrastructures/repositories/leave_request");

const {
  get_all_training_programs,
} = require("../infrastructures/repositories/training_program");

const {
  get_all_job_applications,
} = require("../infrastructures/repositories/job_application");
const { get_all_jobs } = require("../infrastructures/repositories/job_vacancy");

const employeeContext = async () => {
  const employees = (await get_all_employees()) || [];
  const numberOfEmployees = employees.length;

  const employeeByType = employees.reduce((acc, employee) => {
    if (!acc[employee.position]) {
      // Ensure correct property
      acc[employee.position] = 0;
    }
    acc[employee.position]++;
    return acc;
  }, {});

  return {
    numberOfEmployees,
    employeeByType,
  };
};

const leaveRequestContext = async () => {
  const leaveRequests = (await get_all_leave_requests()) || [];
  const numberOfLeaveRequests = leaveRequests.length;

  const leaveRequestByType = leaveRequests.reduce((acc, leaveRequest) => {
    if (!acc[leaveRequest.status]) {
      acc[leaveRequest.status] = 0;
    }
    acc[leaveRequest.status]++;
    return acc;
  }, {});

  return {
    numberOfLeaveRequests,
    leaveRequestByType,
  };
};

const trainingProgramContext = async () => {
  const trainingPrograms = (await get_all_training_programs()) || [];
  const numberOfTrainingPrograms = trainingPrograms.length;

  return {
    numberOfTrainingPrograms,
  };
};

const jobApplicationContext = async () => {
  const jobApplications = (await get_all_job_applications()) || [];
  const numberOfJobApplications = jobApplications.length;

  const jobApplicationByType = jobApplications.reduce((acc, jobApplication) => {
    if (!acc[jobApplication.jobVacancy]) {
      acc[jobApplication.jobVacancy] = 0;
    }
    acc[jobApplication.jobVacancy]++;
    return acc;
  }, {});

  return {
    numberOfJobApplications,
    jobApplicationByType,
  };
};

const jobVacancyContext = async () => {
  const jobs = (await get_all_jobs()) || [];
  const numberOfJobs = jobs.length;

  return {
    numberOfJobs,
  };
};

const generatePrompt = async () => {
  // Await the asynchronous context functions
  const employeeData = await employeeContext();
  const leaveRequestData = await leaveRequestContext();
  const trainingProgramData = await trainingProgramContext();
  const jobApplicationData = await jobApplicationContext();
  const jobVacancyData = await jobVacancyContext();

  // Construct the prompt string
  const prompt = `
Generate a detailed and professional report about the Galaxy Car Training Center based on the provided context:
Today's Date = ${new Date().toLocaleDateString()}
1. **Employee Overview**:
   - Total number of employees: ${employeeData.numberOfEmployees}.
   - Employee distribution by position: ${JSON.stringify(
     employeeData.employeeByType
   )}.

2. **Leave Requests**:
   - Total number of leave requests: ${leaveRequestData.numberOfLeaveRequests}.
   - Leave requests categorized by type: ${JSON.stringify(
     leaveRequestData.leaveRequestByType
   )}.

3. **Training Programs**:
   - Total number of training programs: ${
     trainingProgramData.numberOfTrainingPrograms
   }.

4. **Job Applications**:
   - Total number of job applications: ${
     jobApplicationData.numberOfJobApplications
   }.
   - Job applications categorized by job vacancy: ${JSON.stringify(
     jobApplicationData.jobApplicationByType
   )}.

5. **Job Vacancies**:
   - Total number of active job vacancies: ${jobVacancyData.numberOfJobs}.

Ensure the report highlights key trends, provides actionable insights, and includes recommendations for improving operations, employee satisfaction, and overall training effectiveness at the Galaxy Car Training Center.
`;

  return prompt;
};

class ReportUseCase {
  constructor(gemini) {
    this.gemini = gemini;
  }

  async getReports() {
    return await getReports();
  }

  async getReportById(id) {
    return await getReportById(id);
  }

  async createReport(user_id) {
    const prompt = await generatePrompt();

    const content = await this.gemini.generateContent(prompt);

    return await createReport(content, user_id);
  }
}

module.exports = ReportUseCase;

// const prompt = `Generate a detailed report analyzing HR performance within a car training center using the Human Resource Management System (HRMS). The analysis should include key HR metrics and insights derived from the system’s data, such as:

// Introduction

// Provide an overview of the purpose of the HRMS, focusing on how it collects and analyzes data to assess HR performance.
// Briefly mention the integration of AI to generate reports that highlight HR trends and insights.
// Employee Metrics

// Analyze the number of employees within the organization, categorized by job roles, departments, and employment status (full-time, part-time, etc.).
// Provide insights on employee turnover, retention rates, and employee demographics (age, experience, etc.).
// Offer recommendations for improving employee retention based on the data.
// Job Applicants Analysis

// Review the number of job applicants over a specified period and their qualifications.
// Analyze the success rate of applicants, including how many applicants were hired, rejected, or are still in process.
// Provide insights into which roles attract the most applicants and the overall quality of candidates applying for various positions.
// Training Analysis

// Present data on the number of employees undergoing training, including training types, completion rates, and performance outcomes.
// Analyze the effectiveness of the training programs based on attendance, engagement, and post-training evaluations.
// Offer recommendations for improving training programs based on employee performance and feedback.
// Attendance and Punctuality Trends

// Analyze attendance patterns, including absenteeism, tardiness, and employee availability.
// Highlight any trends in attendance that may indicate underlying issues, such as low morale or engagement.
// Suggest actions to improve attendance, such as policy adjustments or employee incentives.
// Performance Evaluation Insights

// Provide an analysis of employee performance evaluation data, highlighting trends in performance across departments or teams.
// Identify any skills gaps or areas of underperformance that require attention.
// Offer recommendations for improving employee performance through targeted interventions or training.
// AI-Generated Recommendations

// Discuss how the AI-driven HRMS analyzes data to generate recommendations for improving HR processes.
// Present AI insights on employee engagement, training improvements, and recruitment strategies.
// Conclusion

// Summarize the key findings from the HR performance analysis, highlighting strengths and areas for improvement.
// Provide actionable recommendations for HR leadership to enhance workforce management and operational efficiency.`;
