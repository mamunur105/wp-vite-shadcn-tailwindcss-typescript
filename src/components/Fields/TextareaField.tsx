import React from "react";
import FieldWrapper from "@/components/Customize/FieldWrapper";
import { Textarea } from "@/components/ui/textarea";

interface TextareaFieldProps {
    label?: string; // Optional label for the textarea
    desc?: string; // Optional description for the textarea
    type?: string; // Optional additional class or type for FieldWrapper
    value?: string; // The value of the textarea
    placeholder?: string; // Placeholder text for the textarea
    rows?: number; // Number of rows in the textarea
    disabled?: boolean; // Whether the textarea is disabled
    className?: string; // Additional classes for the textarea
    name?: string; // Name of the input field
    onChange?: (value: string) => void;
}

const TextAreaField: React.FC<TextareaFieldProps> = (props) => {
    const {
        label,
        desc,
        type,
        placeholder,
        value,
        rows = 4,
        disabled = false,
        onChange,
        className = "",
    } = props;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) onChange(e.target.value);
    };
    return (
        <FieldWrapper label={label} desc={desc} type={type}>
            <Textarea
                name={props.name}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}
                rows={rows}
                disabled={disabled}
                className={`border-slate-200 ${className}`}
            />
        </FieldWrapper>
    );
};

export default TextAreaField;