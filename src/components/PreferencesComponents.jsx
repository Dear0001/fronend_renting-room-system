import React from 'react';
import { IoPricetagOutline } from "react-icons/io5";

const PreferencesComponents = () => {
    return (
        <div>
            <a type={"button"} className={"py-2.5 px-4 flex gap-2 border-2 rounded-2xl border-gray-600 justify-center items-center text-center"}>
                <IoPricetagOutline/>
                <p>Price</p>
            </a>
        </div>
    );
};

export default PreferencesComponents;