import { useState, FormEvent } from "react";
import { Request, CreateRequest } from "../../../../entities/request/model/requestType";
import { Validate } from "../Validate/Validate";
import { MyInput } from "../Input/MyInput";
import { MyButton } from "../Button/MyButton";
import classes from "./RequestForm.module.css";

interface IsDirtyType {
    title: boolean
    description: boolean
}

interface RequestFormType {
    request?: Request;
    onSubmit: (
        { formData, setFormData }:
        { formData: CreateRequest, setFormData: (formData: CreateRequest) => void }
    ) => void;
    contentButton: string
}

export const RequestForm = (props: RequestFormType) => {
    
    const { request, onSubmit, contentButton } = props;

    const [formData, setFormData] = useState<CreateRequest>({
        title: request?.title || '',
        description: request?.description || ''
    });

    const [isDirty, setIsDirty] = useState<IsDirtyType>({title: false, description: false});

    const wrappedOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({ formData, setFormData });
    };
    
    return (
        <div className={classes.wrapper}>
            <form onSubmit={wrappedOnSubmit}>
                <Validate
                    formDataField={formData.title}
                    isDirty={isDirty.title}
                    options={{minLength: 1, isEmpty: true, maxLength: 100}}
                    isTitle={true}
                />
                <MyInput
                    value={formData.title}
                    onChange={e => setFormData(oldData => ({...oldData, title: e.target.value.trim()}))}
                    onBlur={() => setIsDirty(prev => ({...prev, title: true}))}
                    type='text'
                    placeholder='Название заявки'
                />
                <Validate 
                    formDataField={formData.description}
                    isDirty={isDirty.description}
                    options={{minLength: 1, isEmpty: true, maxLength: 1000000}}
                />
                <MyInput
                    value={formData.description}
                    onChange={e => setFormData(oldData => ({...oldData, description: e.target.value.trim()}))}
                    onBlur={() => setIsDirty(prev => ({...prev, description: true}))}
                    type='text'
                    placeholder='Описание заявки'
                />
                <MyButton disabled={formData.title && formData.description !== '' ? false : true}>
                    {contentButton}
                </MyButton>
            </form>
        </div>
    )
}
