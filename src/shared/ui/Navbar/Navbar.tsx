import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

export const Navbar = () => {
    
    return <div className={classes.navbar}>
        <div className={classes.navbar__links}>
            <NavLink to={'/requests'}>Список заявок</NavLink>
            <NavLink to={'/requests/new'}>Создание заявки</NavLink>
        </div>
    </div>
}
