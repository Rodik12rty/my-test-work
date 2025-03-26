import { useNavigate } from "react-router-dom";
import { useTypedDispatch } from "../../../shared/hooks/useTypedDispatch";
import { addRequest } from "../../../entities/request/model/requestActions";
import { CreateRequest } from "../../../entities/request/model/requestType";
import { RequestForm } from "../../../shared/requests/ui/RequestForm/RequestForm";

export const NewRequest = () => {

    const router = useNavigate();

    const dispatch = useTypedDispatch();

    const addNewRequestHandler = (
        {formData, setFormData}:
        {formData: CreateRequest, setFormData: (formData: CreateRequest) => void}
    ) => {
        dispatch(addRequest(formData));
        setFormData({...formData, title: '', description: ''});
        router(`/requests`)
    }

    return <div>
        <RequestForm
            onSubmit={addNewRequestHandler}
            contentButton='Создать заявку'
        />
    </div>
}
