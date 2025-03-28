import { ComponentProps } from "react";
import classes from "./MyButton.module.css";

export const MyButton = ({children, ...props} : ComponentProps<"button">) => {
    
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}
