import React from "react";
import { Form } from "@/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { resetPasswordSchema, ResetPasswordFormInputs } from "@/components/schema/reset-password";

export function ResetPassword() {
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm<ResetPasswordFormInputs>({
    resolver: zodResolver(resetPasswordSchema),
  });

  function handleFormSubmit(form: ResetPasswordFormInputs) {
    navigate('/login');
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        buttonText="Create New Password"
        register={register}
        errors={errors}
        showForgotPassword={false}
        showFullName={false}
        showTitleCreate={false}
        showEmail={false}
        showPassword={false}
        showHaveAccount={false}
        showTitleResetPassword={true}
        showTitleForgotPassword={false}
        showEmailUsername={false}
        showNoAccount={false}
        showTitleLogin={false}
        showConfirmNewPassword={true}
        showNewPassword={true}
      />
    </div>
  );
}
