import { useValidation } from "../../../hooks/useValidation";
import classes from "./Validate.module.css";

export interface OptionsType {
    minLength: number
    isEmpty: boolean
    maxLength: number
}

interface ValidateType {
    formDataField: string
    isDirty: boolean
    options: OptionsType
    isTitle?: boolean
}

export const Validate = ({
    formDataField,
    isDirty,
    options,
    isTitle
} : ValidateType) => {

    const {minLengthError, maxLengthError, isEmpty} = useValidation(formDataField, options);

    return <div>
        {
            (isDirty && minLengthError) &&
            <div className={classes.color}>Введите больше символов для поля</div>
        }
        {
            (isDirty && maxLengthError) &&
            <div className={classes.color}>Слишком длинное {isTitle ? 'название' : 'описание'} заявки</div>
        }
        {
            (isDirty && isEmpty) &&
            <div className={classes.color}>{isTitle ? 'Название' : 'Описание'} заявки не может быть пустым</div>
        }
    </div>
}
