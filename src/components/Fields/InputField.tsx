import React from "react";
import { Input } from "@/components/ui/input";
import FieldWrapper from "@/components/Customize/FieldWrapper";

interface InputFieldProps {
    wrapperClass?: string;
    label?: string;        // Optional label
    desc?: string;         // Optional description
    type?: string;         // Input type (text, password, etc.)
    placeholder?: string;  // Placeholder text
    value?: string;        // Current value
    name?: string;         // Field name
    className?: string;    // Optional CSS class
    onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({
     wrapperClass,
     name = "",
     value = "",
     onChange,
     ...props
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (onChange) onChange(e.target.value);
    };
    return (
        <FieldWrapper wrapperClass={wrapperClass} {...props}>
            <Input
                name={name}
                value={value}
                onChange={handleChange}
                type={props.type || "text"}
                placeholder={props.placeholder}
                className={props.className}
            />
        </FieldWrapper>
    );
};

export default InputField;