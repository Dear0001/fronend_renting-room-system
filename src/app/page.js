import React from 'react';
import RoomCard from "@/components/RoomCard";
import Card from "@/components/Card";
import OwnerDownload from "@/components/OwnerDownload";
import ViewOwnerComponent from "@/components/ViewOwnerComponent";
import PreferencesComponents from "@/components/PreferencesComponents";
import RentingResumeComponent from "@/components/RentingResumeComponent";
import Test from "@/components/Test";

const Page = () => {
    return (
        <div className={"bg-gray-400 flex flex-col gap-4"}>
            <Test/>
            <RoomCard/>
            <Card/>
            <OwnerDownload/>
            <ViewOwnerComponent/>
            <PreferencesComponents/>
            <RentingResumeComponent/>
        </div>
    );
};

export default Page;