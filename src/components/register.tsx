import { useState } from "react";


export function Register(){
    interface RegisterForm {
        fullName: string;
        email: string;
        password: string;
      }
    
      const [form, setForm] = useState<RegisterForm>({
        fullName: "",
        email: "",
        password: "",
      });
      
      function fillForm(){
        if (!form.email) {
            return setForm({
            fullName: "Dummy",
            email: "dummy@gmail.com",
            password: "dummy",
          });
        }

        setForm({
            fullName: "",
            email: "",
            password: "",
        });
    }

    return (
        <>
        <h1>{form.fullName}</h1>
        <h1>{form.email}</h1>
        <h1>{form.password}</h1>
        <button onClick={fillForm}>Fill Form</button>
        </>
    )
}