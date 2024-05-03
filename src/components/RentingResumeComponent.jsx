import React from 'react';

const RentingResumeComponent = () => {
    return (
        <>
            <div
                className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
                <div className="p-6">
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Personal Information</strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Roommate Compatibility: <span>3 only</span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Move-in Date: <span></span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Inform leave: <span>1month before</span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>National ID Card: <span></span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Occupation: <span></span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Place of Birth: <span></span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Phone number: <span></span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Nationality: <span></span></strong>
                    </p>
                    <p className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Current Address: <span></span></strong>
                    </p>
                    <div className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        <strong>Payment:  </strong>
                        <ul>
                            <li>Book room</li>
                            <li>Trash 1$</li>
                            <li>Water 2000R/1km^3</li>
                            <li>Available Room: 90$/1st Floor, 80$/2nd Floor, 70$/3rd Floor</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RentingResumeComponent;