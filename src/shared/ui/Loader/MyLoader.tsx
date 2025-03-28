import classes from "./MyLoader.module.css";

export const MyLoader = () => {
    
    return (
        <div className={classes.wrapper}>
            <div className={classes.loader}></div>
        </div>
    )
}
