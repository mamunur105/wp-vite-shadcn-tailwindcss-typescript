import {useState} from "react";
import SwitchField from '@/components/Fields/SwitchField';
import MainMenu from "@/admin/js/MainMenu.tsx";
import useStore from "@/admin/js/Utils/StateProvider";
import InputField from '@/components/Fields/InputField';
import TextareaField from "@/components/Fields/TextareaField.tsx";
import SelectField from '@/components/Fields/SelectField';
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner"

export default function ArchiveSettings() {
    const [loader, setLoader ] = useState(false);
    const {
        options,
        setOption,
        saveSettings
    } = useStore();

    console.log('options', options);

    return (
        <>
            <MainMenu/>
            {
                loader ?
                    <div className="absolute left-0 right-0 top-0 bottom-0 flex items-center justify-center">
                        <Spinner />
                    </div>
                    :
                <div className={'p-4'}>
                    <InputField
                        label="Plugin Name"
                        desc="Enter the name of your plugin."
                        name={'input_field'}
                        value={options?.input_field}
                        onChange={ (value)=> setOption('input_field', value )}
                    />
                    <TextareaField
                        label="Description"
                        desc="Write a short description of your plugin."
                        name={'textarea_field'}
                        value={options?.textarea_field}
                        onChange={ (value)=> setOption('textarea_field', value )}
                    />
                    <SwitchField
                        label="Enable Rule"
                        desc="Rule Enable Or disable"
                        name={'switch_field'}
                        value={options?.switch_field}
                        onChange={ (value)=> setOption('switch_field', value )}
                    />
                    {/* Select Field */}
                    <SelectField
                        label="Status"
                        desc="Select the plugin status."
                        options={{
                            active: "Active",
                            inactive: "Inactive",
                            maintenance: "Maintenance",
                        }}
                        name={'select_field'}
                        value={options?.select_field || 'active' }
                        onChange={ (value)=> setOption('select_field', value )}
                    />
                </div>
            }

            <Button
                className='w-45 h-15 p-5 !text-lg cursor-pointer course bg-sky-900 fixed bottom-30 right-10 text-white'
                onClick={ async ()=>{
                    setLoader(true);
                    await saveSettings();
                    setLoader(false);
                }}
                variant="outline"
            >
                Save Settings { loader ? <div className={`absolute right-5`}> <Spinner /> </div> : '' }
            </Button>
        </>
    );
}