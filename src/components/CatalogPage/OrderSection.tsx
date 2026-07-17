"use client";

import { useState } from "react";

import { SubmitFnType } from "@/types/modalProps";

import { ErrorMessage } from "../shared/Modal/ErrorMessage";
import { Modal } from "../shared/Modal/Modal";
import { SuccessMessage } from "../shared/Modal/SuccessMessage";
import { OrderForm } from "./OrderForm";

export const OrderSection = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const notificationHandler = async (submitFn: SubmitFnType) => {
    try {
      await submitFn();
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    }
  };

  return (
    <div className="mx-auto w-full tab:h-[541px] tab:w-[677px] tab:p-10 tab:backdrop-blur-[10px]">
      <OrderForm notificationHandler={notificationHandler} />

      <Modal isOpen={isSuccess} onClose={() => setIsSuccess(false)}>
        <SuccessMessage />
      </Modal>

      <Modal isOpen={isError} onClose={() => setIsError(false)}>
        <ErrorMessage />
      </Modal>
    </div>
  );
};
