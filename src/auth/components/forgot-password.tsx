import React from "react";
import { Form } from "@/components/form";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { RegisterFormInputs, registerSchema } from "@/components/schema/register";
import { zodResolver } from "@hookform/resolvers/zod";

export function ForgotPassword() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });

  function handleFormSubmit(form: RegisterFormInputs) {
    navigate('/login');
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        buttonText="Send Instruction"
        register={register}
        errors={errors}
        showForgotPassword={false}
        showFullName={false}
        showTitleCreate={false}
        showEmail={true}
        showPassword={false}
        showHaveAccount={true}
        showTitleResetPassword={false}
        showTitleForgotPassword={true}
        showEmailUsername={false}
        showNoAccount={false}
        showTitleLogin={false}
        showConfirmNewPassword={false}
        showNewPassword={false}
      />
    </div>
  );
}
