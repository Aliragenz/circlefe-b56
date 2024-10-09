import { RegisterFormInputs, registerSchema } from "@/components/schema/register";
import { setUser } from "@/store/auth-slice";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/use-store";
import { RegisterRequestDTO, RegisterResponseDTO } from "../types/dto";

export function useRegisterForm() {
    const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { register, handleSubmit, formState: { errors } } = useForm<RegisterFormInputs>({
    resolver: zodResolver(registerSchema),
  });


  async function handleFormSubmit({email, password, fullName}: RegisterFormInputs) {
    try {
      const response = await axios.post<null, {data: RegisterResponseDTO}, RegisterRequestDTO>("http://localhost:5000/api/v1/auth/register", 
        {
        email,
        fullName,
        password,
      }
    );
    
    const userData = response.data;
    
    console.log(response.data);

      dispatch(setUser(userData));
      
      console.log("Registration successful!");

      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);

      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || "Registration Failed.";
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