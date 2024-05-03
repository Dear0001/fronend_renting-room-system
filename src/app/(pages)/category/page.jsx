import React from 'react';
import {MdFindReplace} from "react-icons/md";
import PreferencesComponents from "@/components/PreferencesComponents";
import RoomCard from "@/components/RoomCard";

const Page = () => {
    return (
        <div className={"my-10"}>
            <div className={"container-width flex gap-2  text-2xl font-bold text-black"}>
                <MdFindReplace  className={"mb-5"}/>
                <h3 className={"mb-5"}>Filter your preferences</h3>
            </div>
            <div className="container-width grid grid-cols-4 gap-4">
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
                <div><PreferencesComponents/></div>
            </div>
            <div className="container-width flex flex-wrap justify-center my-10 gap-5">
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
                <RoomCard/>
            </div>
        </div>
    );
};

export default Page;