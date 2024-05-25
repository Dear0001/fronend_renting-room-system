import React from 'react';

const PreferencesComponents = ({ text, icon: Icon, items }) => {
    return (
        <div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className="btn border bg-white mb-2">
                {Icon && <Icon />}
                <span>{text}</span>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {items?.map((item, index) => (
                    <li key={index}><a>{item}</a></li>
                ))}
            </ul>
        </div>
    );
};

export default PreferencesComponents;
