"use client";
import React from "react";
import { GridLoader } from "react-spinners";

const ErrorMessage = () => {
  return (
    <div className="my-20 flex felx-col justify-center items-center gap-4">
      <GridLoader color="red" />
      <div className="text-[50px]">Ooops!</div>
      <div>잠시 후 다시 확인해주세요.</div>
    </div>
  );
};

export default ErrorMessage;
