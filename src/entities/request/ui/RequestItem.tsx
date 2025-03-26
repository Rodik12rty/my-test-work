import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "../../../shared/hooks/useTypedDispatch";
import { deleteRequest } from "../model/requestActions";
import { Request } from "../model/requestType";
import { MyButton } from "../../../shared/requests/ui/Button/MyButton";
import { formatDate } from "../../../shared/lib/helpers/getCurrentDateTime";
import classes from "./RequestItem.module.css"; 

interface RequestItemType {
    request: Request
}

export const RequestItem = ({request} : RequestItemType) => {

    const router = useNavigate();
    const dispatch = useTypedDispatch();

    const removeRequestHandler = (id: string) => {
        dispatch(deleteRequest(id));
    }

    return (
        <div className={classes.request}>
            <div className={classes.request__content}>
                <h4 className={`${classes.title} ${classes.ellipsis}`}>{request.title}</h4>
                <p className={`${classes.description} ${classes.ellipsis}`}>{request.description}</p>
                <span>Дата создания заявки: {formatDate(request.createdAt, 'DD.MM.YYYY')}</span><br />
                <span>Время создания заявки: {formatDate(request.createdAt, 'HH:mm')}</span>
            </div>
            <div className={classes.request__btns}>
                <MyButton onClick={() => router(`/requests/${request.id}`)}>Открыть</MyButton>
                <MyButton onClick={() => {removeRequestHandler(request.id)}}>Удалить</MyButton>
            </div>             
        </div>
    )
}
