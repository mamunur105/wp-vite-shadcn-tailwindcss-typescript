import React from "react";
import { Switch } from "@/components/ui/switch";
import FieldWrapper from "@/components/Customize/FieldWrapper";

interface SwitchFieldProps {
    label?: string; // Optional label for the switch
    desc?: string; // Optional description for the switch
    type?: string; // Optional additional class or type for FieldWrapper
    value?: boolean; // State of the switch (on/off)
    name?: string;
    onChange?: (checked: boolean) => void;
}

const SwitchField: React.FC<SwitchFieldProps> = (props) => {
    const { label, desc, type, value, name, onChange } = props;
    const handleToggle = (checked: boolean) => {
        if (onChange) onChange(checked);
    };
    return (
        <FieldWrapper label={label} desc={desc} type={type}>
            <Switch name={name} checked={value} onCheckedChange={handleToggle} />
        </FieldWrapper>
    );
};

export default SwitchField;