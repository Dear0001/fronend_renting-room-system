import React from 'react';

const BackgroundImage = () => {
    return (
        <>
            <div
                className="relative overflow-hidden h-[500px] bg-cover bg-no-repeat p-12 text-center"
                style={{backgroundImage: `url('/assets/room-bg.jpg')`}}>
                <div
                    className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
                    style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
                </div>
            </div>
        </>
    )
};

export default BackgroundImage;