import React from "react";
import { Typography } from "@mui/material";
import PageContainer from "src/components/container/PageContainer";
import DashboardCard from "../../components/shared/DashboardCard";

const Employees = () => {
  return (
    <PageContainer title="Employees" description="this is Employees page">
      <DashboardCard title="Employees"></DashboardCard>
    </PageContainer>
  );
};

export default Employees;
