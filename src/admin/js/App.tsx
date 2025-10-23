import {HashRouter, Navigate, Route, Routes} from "react-router-dom";
import ArchiveSettings from "@/admin/js/ArchiveSettings.tsx";
import SingleSettings from "@/admin/js/SingleSettings.tsx";
import Text from "@/admin/js/Test.tsx";
import useStore from "@/admin/js/Utils/StateProvider.ts";
import {useEffect} from "react";

export default function App() {

    const {
        getTheOptions
    } = useStore();

    useEffect( () => {
        getTheOptions();
    }, []);

    return (
        <div className="custom-css-class min-h-screen p-2 relative rounded-sm bg-white">
            <HashRouter>
                <Routes>
                    <Route path="/" element={<ArchiveSettings/>}/>
                    <Route path="/single" element={<SingleSettings/>}/>
                    <Route path="/test" element={<Text/>}/>
                    <Route path="*" element={<Navigate to="/" replace/>}/>
                </Routes>
            </HashRouter>
        </div>
    );
}