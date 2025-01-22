import React from "react";

const formatDate = (isoDate) => {
  console.log(isoDate);
  try {
    if (!isoDate) throw new Error("Invalid date value");

    const date = new Date(isoDate);
    if (isNaN(date)) throw new Error("Invalid date format");

    return new Intl.DateTimeFormat("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    }).format(date);
  } catch (error) {
    console.error(error.message);
    return "Invalid date";
  }
};
const FormatedDate = ({ date }) => <>{formatDate(date)}</>;

export default FormatedDate;
