"use client"

import { useState } from "react";
import NewPasswordCard from "./NewPasswordCard";
import ChangeSuccess from "./ChangeSuccess";

export default function NewPasswordPage() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  return (
    <>
      {isSuccess ? (
        <ChangeSuccess />
      ) : (
        <NewPasswordCard setIsSuccess={setIsSuccess} />
      )}
    </>
  )
}