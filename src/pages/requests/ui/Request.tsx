import { useState } from "react";
import { useParams } from "react-router-dom";
import { useTypedDispatch } from "../../../shared/hooks/useTypedDispatch";
import { useTypedSelector } from "../../../shared/hooks/useTypedSelector";
import { deleteRequest, editRequest } from "../../../entities/request/model/requestActions";
import { CreateRequest } from "../../../entities/request/model/requestType";
import { MyLoader } from "../../../shared/requests/ui/Loader/MyLoader";
import { MyButton } from "../../../shared/requests/ui/Button/MyButton";
import { MyModal } from "../../../shared/requests/ui/Modal/MyModal";
import { RequestForm } from "../../../shared/requests/ui/RequestForm/RequestForm";
import { formatDate } from "../../../shared/lib/helpers/getCurrentDateTime";
import classes from "./Request.module.css";

export const Request = () => {

    const params = useParams();

    const [modal, setModal] = useState<boolean>(false);

    const dispatch = useTypedDispatch();

    const {requests, loading} = useTypedSelector(state => state.request);

    const request = requests.find(r => r.id === params.id);

    if (!request) {
        return (
            <h2 style={{textAlign: 'center', margin: '10px 0'}}>
                Заявка не найдена!
            </h2>
        )
    }

    const removeRequestHandler = (id: string) => {
        dispatch(deleteRequest(id));
    }

    const editRequestHandler = ({ formData }: { formData: CreateRequest }) => {
        dispatch(editRequest({ id: request.id, ...formData }));
        setModal(false);
    }

    return (
        <div className={classes.wrapper}>
            <h2 className={classes.head}>
                Детальная информация о заявке - {request?.title}
            </h2>
            {loading
                ? <MyLoader />
                : <div className={classes.container}>
                    <div>
                        <h4>{request?.title}</h4> 
                        <p>{request?.description}</p>
                        <span>Дата создания заявки: {formatDate(request.createdAt, 'DD.MM.YYYY')}</span><br />
                        <span>Время создания заявки: {formatDate(request.createdAt, 'HH:mm')}</span>
                    </div>
                    <div className={classes.btn}>
                        <MyButton onClick={() => setModal(true)}>Редактировать</MyButton>
                        <MyButton onClick={() => removeRequestHandler(request.id)}>Удалить</MyButton>
                    </div>
                    <MyModal visible={modal} setVisible={setModal}>
                        <RequestForm request={request} onSubmit={editRequestHandler} contentButton='Сохранить' />
                    </MyModal>
                </div>
            }
        </div>
    )
}
