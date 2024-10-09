import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode;
}

export function Button({ children, ...props }: ButtonProps ){
    return(
        <button style={{ 
            backgroundColor: "#04A51E",
            padding: "8px 12px",
            color: "white",
            fontSize: "20px",
            width: "100%",
            borderStyle: "none",
            borderRadius: "30px",
            fontFamily:"sans-serif", 
            fontWeight:"bold"
             
         }}
         {...props}
         type="submit"
         >
            {children}</button>
    )
}