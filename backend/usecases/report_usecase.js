const {
  getReports,
  getReportById,
  createReport,
} = require("../infrastructures/repositories/report");

const prompt = `Generate a detailed report analyzing HR performance within a car training center using the Human Resource Management System (HRMS). The analysis should include key HR metrics and insights derived from the system’s data, such as:

Introduction

Provide an overview of the purpose of the HRMS, focusing on how it collects and analyzes data to assess HR performance.
Briefly mention the integration of AI to generate reports that highlight HR trends and insights.
Employee Metrics

Analyze the number of employees within the organization, categorized by job roles, departments, and employment status (full-time, part-time, etc.).
Provide insights on employee turnover, retention rates, and employee demographics (age, experience, etc.).
Offer recommendations for improving employee retention based on the data.
Job Applicants Analysis

Review the number of job applicants over a specified period and their qualifications.
Analyze the success rate of applicants, including how many applicants were hired, rejected, or are still in process.
Provide insights into which roles attract the most applicants and the overall quality of candidates applying for various positions.
Training Analysis

Present data on the number of employees undergoing training, including training types, completion rates, and performance outcomes.
Analyze the effectiveness of the training programs based on attendance, engagement, and post-training evaluations.
Offer recommendations for improving training programs based on employee performance and feedback.
Attendance and Punctuality Trends

Analyze attendance patterns, including absenteeism, tardiness, and employee availability.
Highlight any trends in attendance that may indicate underlying issues, such as low morale or engagement.
Suggest actions to improve attendance, such as policy adjustments or employee incentives.
Performance Evaluation Insights

Provide an analysis of employee performance evaluation data, highlighting trends in performance across departments or teams.
Identify any skills gaps or areas of underperformance that require attention.
Offer recommendations for improving employee performance through targeted interventions or training.
AI-Generated Recommendations

Discuss how the AI-driven HRMS analyzes data to generate recommendations for improving HR processes.
Present AI insights on employee engagement, training improvements, and recruitment strategies.
Conclusion

Summarize the key findings from the HR performance analysis, highlighting strengths and areas for improvement.
Provide actionable recommendations for HR leadership to enhance workforce management and operational efficiency.`;

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
    const content = await this.gemini.generateContent(prompt);

    return await createReport(content, user_id);
  }
}

module.exports = ReportUseCase;
