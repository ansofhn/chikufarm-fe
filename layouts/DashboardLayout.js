import React from "react";
import Head from "next/head";
import ProfileMenu from "../components/ProfileMenu";
import SideNavbar from "../components/SideNavbar";

export default function DashboardLayout({ title, children }) {
    return (
        <div className="h-screen bg-gray-200">
            <div className="p-5 bg-gray-200">
                <Head>
                    <title>{title}</title>
                </Head>
                <div>
                    <SideNavbar />
                    <ProfileMenu />
                    {children}
                </div>
            </div>
        </div>
    );
}
