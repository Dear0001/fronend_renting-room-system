import React from 'react';

const PhoneNumber = () => {
    return (
        <>
            <div className="mb-4 flex flex-col my-2">
                <div
                    className="focus-within:border-blue-600 relativeflex overflow-hidden rounded-md border-2 transition sm:w-80 lg:w-full">
                    <input type="number" id="signup-email"
                           className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none"
                           placeholder="Enter your phone number"/>
                </div>
            </div>
        </>
    );
};

export default PhoneNumber;