import React from "react";
import FieldWrapper from "@/components/Customize/FieldWrapper";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

interface SelectFieldProps {
    label?: string;
    desc?: string;
    type?: string;
    options: Record<string, string>;
    value?: string;
    name?:string;
    onChange?: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = (props) => {
    const { name, label, desc, type, onChange, value, options } = props;
    const handleChange = (val: string) => {
        if (onChange) onChange(val);
    };
    return (
        <FieldWrapper label={label} desc={desc} type={type}>
            <Select name={name} value={value} onValueChange={handleChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={value} />
                </SelectTrigger>
                <SelectContent className="z-99 bg-slate-50">
                    {Object.entries(options).map(([key, label]) => (
                        <SelectItem key={key} value={key}>
                            {label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </FieldWrapper>
    );
};
export default SelectField;