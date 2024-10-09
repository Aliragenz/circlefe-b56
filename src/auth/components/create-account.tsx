import { Form } from "@/components/form";
import { useRegisterForm } from "../hooks/use-register";

export function CreateAccount() {
  
  const { register, handleSubmit, errors, handleFormSubmit, } = useRegisterForm()

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        buttonText="Register"
        register={register}
        errors={errors}
        showForgotPassword={false}
        showFullName={true}
        showTitleCreate={true}
        showEmail={true}
        showPassword={true}
        showHaveAccount={true}
        showTitleResetPassword={false}
        showTitleForgotPassword={false}
        showEmailUsername={false}
        showNoAccount={false}
        showTitleLogin={false}
        showConfirmNewPassword={false}
        showNewPassword={false}
      />
    </div>
  );
}
