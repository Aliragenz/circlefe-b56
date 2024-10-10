import { Input, Box, Text } from "@chakra-ui/react";
import { Button } from "../features/auth/components/button";
import Logo from "../img/logocircle.png";
import { Link } from "react-router-dom";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface FormProps {
  onSubmit: (data: any) => void;
  buttonText: string;
  register: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  showForgotPassword: boolean;
  showFullName: boolean;
  showEmail: boolean;
  showEmailUsername: boolean;
  showPassword: boolean;
  showNoAccount: boolean;
  showHaveAccount: boolean;
  showTitleCreate: boolean;
  showTitleLogin: boolean;
  showTitleForgotPassword: boolean;
  showTitleResetPassword: boolean;
  showNewPassword: boolean;
  showConfirmNewPassword: boolean;
  isSubmitting?: boolean;
}


export function Form({
  onSubmit,
  buttonText,
  register,
  errors,
  showForgotPassword,
  showFullName,
  showEmail,
  showEmailUsername,
  showPassword,
  showHaveAccount,
  showNoAccount,
  showTitleCreate,
  showTitleLogin,
  showTitleForgotPassword,
  showTitleResetPassword,
  showConfirmNewPassword,
  showNewPassword
}: FormProps) {

  // const user = useSelector((state) => state.auth);


  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh" bg="#1A1A1A" color="#FFF" p="4">
      <Box mb="6" marginLeft="-220px">
        <img src={Logo} alt="Circle Logo" />
      </Box>
      <Box textAlign="left" fontSize="30px" fontFamily="sans-serif" fontWeight="bold" mb="6" width="100%" maxW="400px">
        {showTitleLogin && <Text>Login to Circle</Text>}
        {showTitleCreate && <Text>Create Account Circle</Text>}
        {showTitleForgotPassword && <Text>Forgot Password</Text>}
        {showTitleResetPassword && <Text>Reset Password</Text>}
      </Box>
      <Box as="form" onSubmit={onSubmit} width="100%" maxW="400px" textAlign="center">
        {showFullName && (
          <>
            {errors?.fullName?.message && (
              <p style={{ color: 'red' }}>
                {String(errors.fullName.message)}
              </p>
            )}
            <Input {...register("fullName")} placeholder="Full Name*" bg="#2C2C2C" borderColor="#3A3A3A" mb="4" color="#FFF" />
          </>
        )}
        {showEmailUsername && (
          <>
            {errors?.email && <p style={{ color: 'red' }}>{(errors as any).email.message}</p>}
            <Input {...register("email")} placeholder="Email/Username*" bg="#2C2C2C" borderColor="#3A3A3A" mb="4" color="#FFF" />
          </>
        )}
        {showEmail && (
          <>
            {errors?.email && <p style={{ color: 'red' }}>{(errors as any).email.message}</p>}
            <Input {...register("email")} placeholder="Email*" bg="#2C2C2C" borderColor="#3A3A3A" mb="4" color="#FFF" />
          </>
        )}
        {showPassword && (
          <>
            {errors?.password && <p style={{ color: 'red' }}>{(errors as any).password.message}</p>}
            <Input {...register("password")} type="password" placeholder="Password*" bg="#2C2C2C" borderColor="#3A3A3A" mb="4" color="#FFF" />
          </>
        )}
        {showNewPassword && (
          <>
            {errors?.newpassword && <p style={{ color: 'red' }}>{(errors as any).newpassword.message}</p>}
            <Input {...register("newpassword")} type="password" placeholder="New Password*" bg="#2C2C2C" borderColor="#3A3A3A" mb="4" color="#FFF" />
          </>
        )}
        {showConfirmNewPassword && (
          <>
            {errors.confirmnewpassword && <p style={{ color: 'red' }}>{(errors as any).confirmnewpassword.message}</p>}
            <Input {...register("confirmnewpassword")} type="password" placeholder="Confirm New Password*" bg="#2C2C2C" borderColor="#3A3A3A" mb="4" color="#FFF" />
          </>
        )}
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px', marginTop: '-10px' }}>
          {showForgotPassword && (
            <Link to="/forgot-password">
              <Text as="span" textAlign="right" mb="4" color="#A9A9A9" fontSize="sm">Forgot password?</Text>
            </Link>
          )}
        </div>
        <Button type="submit">{buttonText}</Button>
        {showNoAccount && (
          <Text textAlign="left">Don't have an account yet?
            <Link to="/register">
              <Text as="span" color="#32CD32"> Create Account</Text>
            </Link>
          </Text>
        )}
        {showHaveAccount && (
          <Text textAlign="left">Already Have Account?
            <Link to="/login">
              <Text as="span" color="#32CD32"> Login</Text>
            </Link>
          </Text>
        )}
      </Box>
    </Box>
  );
}
