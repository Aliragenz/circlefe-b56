import { LoginFormInputs, loginSchema } from "@/components/schema/login";
import { setUser } from "@/store/auth-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/use-store";
import { LoginResponseDTO } from "../types/dto";
import Cookies from "js-cookie";

export function useLoginForm() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });


  async function handleFormSubmit({ email, password }: LoginFormInputs) {
    try {
      const response = await axios.post<LoginResponseDTO>("http://localhost:5000/api/v1/auth/login", {
        email,
        password,
      });
    
      const { user, token } = response.data; // Deconstructing the response
  
      // Dispatch the user data
      dispatch(setUser(user));
      
      // Check if localStorage is updated
      console.log('Local Storage:', localStorage.getItem('user')); // Should log the user data
      
      // Set token in cookie
      Cookies.set("token", token, { expires: 1 });
      
      console.log('Login successful!');
      
      // Navigate to dashboard after everything is done
      navigate('/');
    } catch (error) {
      console.error('Login failed:', error);
    
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Login Failed.";
        console.error(errorMessage);
      }
    }
  }
  
  
  return {
    register,
    handleSubmit,
    errors,
    handleFormSubmit,
  }

}