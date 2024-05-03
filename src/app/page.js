import React from 'react';
import BannerNav from "@/components/BannerNav";
import { MdFindReplace } from "react-icons/md";
import PreferencesComponents from "@/components/PreferencesComponents";
import Card from "@/components/Card";

const Page = () => {
    return (
        <div className={"flex flex-col gap-4 mb-10"}>
            <BannerNav/>
            <div className={"container-width flex gap-2  text-2xl font-bold text-black"}>
                <MdFindReplace/>
                <h3>Filter your preferences</h3>
            </div>
            <div className="container-width grid grid-cols-4 gap-4">
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
            </div>
            <div className="container-width flex flex-wrap justify-center  gap-5">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </div>
    );
};

export default Page;