import { Form } from "@/components/form";
import { LoginFormInputs, loginSchema } from "@/components/schema/login";
import { setUser } from "@/store/auth-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import Axios from "axios";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export function LoginAccount() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  // Form submission handler
  async function handleFormSubmit(form: LoginFormInputs) {
    try {
      const response = await Axios.post("https://circlebe-b56.vercel.app/api/v1/auth/login", form);
      const { user, token } = response.data; // Adjust response format based on API
  
      // Dispatch the user data
      dispatch(setUser(user));
      
      // Set token in cookie
      Cookies.set("token", token, { expires: 7 }); // Expires in 7 days

      // Optionally store user data in localStorage if needed
      localStorage.setItem('user', JSON.stringify(user));

      console.log("Login successful!");
  
      // Navigate to home after everything is done
      navigate('/');
      
      // Force a page reload
      window.location.reload();

    } catch (error) {
      console.error('Login failed:', error);
  
      if (Axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Login Failed.";
        console.error(errorMessage);
      }
    }
  }

  return (
    <div>
      <Form
        onSubmit={handleSubmit(handleFormSubmit)}
        buttonText="Login"
        register={register}
        errors={errors}
        showForgotPassword={true}
        showFullName={false}
        showEmail={true}
        showPassword={true}
        showNoAccount={true}
        showHaveAccount={false}
        showTitleCreate={false}
        showTitleLogin={true}
        showTitleForgotPassword={false}
        showTitleResetPassword={false}
        showNewPassword={false}
        showConfirmNewPassword={false}
        showEmailUsername={false}
      />
    </div>
  );
}
