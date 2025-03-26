import { ReactNode } from "react";
import classes from "./MyModal.module.css";

interface MyModalType {
    children: ReactNode
    visible: boolean
    setVisible: (value: boolean) => void
}

export const MyModal = ({children, visible, setVisible} : MyModalType) => {
    
    const rootClasses = [classes.modal];

    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}
