"use client"

import { Link, useLocation } from "react-router-dom"
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar"

export default function MainMenu() {
    const { pathname } = useLocation();

    const getLinkClass = (path: string) =>
        `px-6 py-4 !text-lg inline-flex font-semibold !text-white !rounded-none transition-colors ${
            pathname === path ? "bg-[#1677ff] " : "" // default/inactive link
        }`;

    return (
        <Menubar className="border p-0 bg-[#001529] rounded-sm h-auto mb-4 w-full flex gap-0">
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Link to={`/`} className={getLinkClass("/")}>
                        Archive
                    </Link>
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Link to={`/single`} className={getLinkClass("/single")}>
                        Single
                    </Link>
                </MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger asChild>
                    <Link to={`/test`} className={getLinkClass("/test")}>
                        Test
                    </Link>
                </MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    )
}