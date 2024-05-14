import React from 'react';
import OwnerDownload from "@/components/OwnerDownload";
import ImageScroll from "@/components/ImageScroll";

const Page =  () => {
    return (
        <div className={"container-width py-48"}>
            <OwnerDownload/>
            <ImageScroll/>
        </div>
    );
};

export default Page;