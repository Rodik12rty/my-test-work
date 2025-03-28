import { ComponentProps } from "react";
import classes from "./MyInput.module.css";

export const MyInput = (props: ComponentProps<'input'>) => {
    
    return (
        <input className={classes.myInput} {...props} />
    )
}
