import { useState, useEffect } from "react";
import { OptionsType } from "../ui/Validate/Validate";

export const useValidation = (value: string, validations: OptionsType) => {
    
    const [errors, setErrors] = useState({
        minLengthError: false,
        isEmpty: true,
        maxLengthError: false,
    });

    const [inputValid, setInputValid] = useState<boolean>(false);

    useEffect(() => {
        const newErrors = {
            minLengthError: false,
            isEmpty: value.trim().length === 0,
            maxLengthError: false,
        };

        Object.keys(validations).forEach((key) => {
            if (Object.prototype.hasOwnProperty.call(validations, key)) {
                switch (key) {
                    case "minLength":
                        if (typeof validations[key] === "number") {
                            newErrors.minLengthError = value.length < validations[key];
                        }
                        break;
                    case "maxLength":
                        if (typeof validations[key] === "number") {
                            newErrors.maxLengthError = value.length > validations[key];
                        }
                        break;
                }
            }
        });

        setErrors(newErrors);
    }, [value, validations]);

    useEffect(() => {
        setInputValid(
            !errors.minLengthError &&
            !errors.isEmpty &&
            !errors.maxLengthError
        );
    }, [errors]);

    return {
        ...errors,
        inputValid,
    };
};
