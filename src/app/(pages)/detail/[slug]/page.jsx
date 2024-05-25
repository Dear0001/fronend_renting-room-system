import {viewDetails} from "@/service/roomService";
import Image from "next/image";
import ImageScroll from "@/components/ImageScroll";

async function Page({params: {slug}}) {
    console.log("this slug card with id",slug)
    const {payload} = await viewDetails(slug);

    return (
            <div className={"container-width py-48"}>

                <div className="flex flex-col gap-5 mb-10 max-md:flex-wrap">
                <div className="flex flex-col gap-2.5 px-5 -mt-24 text-black">
                    <div className={"flex gap-5 justify-start text-center items-center"}>
                        <div className="avatar">
                            <div className="w-24 rounded-full">
                                <img
                                    src={payload?.image ? payload?.image : "https://prod-images.viu.com/2521856816/6feda49624fdc12682d3a83feb50a732252503f9"}
                                    alt={"f"}/>
                            </div>
                        </div>
                        <div className="text-4xl font-bold">
                            Sopheak Saing
                        </div>
                    </div>
                    <div className="gap-0 self-end mt-2.5 text-xl">View my room on map</div>
                </div>
                <div className="flex gap-5 mt-5 w-full max-md:flex-wrap">
                    <div className="flex flex-col gap-5 w-1/2 max-md:w-full">
                        <div className="flex flex-col gap-3.5 px-5 pt-5 bg-white rounded-2xl shadow-lg">
                            <div className="flex flex-col gap-0 justify-center text-lg font-bold text-black">
                                <div className="px-5 pt-5 pb-9 bg-white rounded-xl shadow-lg">
                                    Personal Info:
                                    <br/>
                                    <span>Full Name: {payload?.movie_title}</span>
                                    <br/>
                                    <span>Contact info:</span>
                                    <br/>
                                    <span>Rent House Address:</span>
                                    <br/>
                                    <span>About Room:</span>
                                    <ul>
                                        <li>
                                            <span>Room Type:</span>
                                        </li>
                                        <li>
                                            <span>Number of Bedroom</span>
                                        </li>
                                        <li>
                                            <span>Number of Bathroom</span>
                                        </li>
                                        <li>
                                            <span>Amenities:</span>
                                        </li>
                                    </ul>
                                    <span>Renting Info: {payload?.description}</span>
                                    <ul>
                                        <li></li>
                                    </ul>
                                    <br/>
                                    <br/>
                                </div>
                            </div>
                            <div className="flex z-10 py-10">
                                <div
                                    class="flex gap-4 items-start text-xl font-bold px-3 pt-1 pb-3 text-black bg-white rounded-xl shadow-lg">
                                    <label htmlFor="file" className="cursor-pointer flex gap-3">
                                        <p>Upload Policies Document</p>
                                        <div class="flex items-center gap-2">
                                        <span
                                            class="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">+</span>
                                            <span class="text-blue-500">Choose File</span>
                                        </div>
                                        <input type="file" id="file" name="file" accept="application/pdf"
                                               className="hidden"/>
                                    </label>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex w-1/2 max-md:w-full">
                        <Image
                            width={50}
                            height={50}
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2da9a51fcdf5568ec53a247719986a990f844f93ad872ca7e980ea2aa9030504?apiKey=2f013c53cc004a938ce597cfa1a4f4fb&"
                            className="grow shrink-0 h-[460px] gap-0 aspect-[1.54] basis-0 w-fit max-md:flex-wrap max-md:max-w-full"
                            alt="Room Image"
                        />
                    </div>
                </div>

                <div className="flex gap-5 mt-5">
                    <div
                        className="px-16 pt-2 pb-5 text-3xl font-bold text-center text-white whitespace-nowrap bg-blue-600 rounded-lg max-md:px-5">
                        Message
                    </div>
                    <div
                        className="px-16 pt-2 pb-5 text-3xl font-bold text-center text-white whitespace-nowrap bg-green-600 rounded-lg max-md:px-5">
                        Call
                    </div>
                </div>
            </div>
                <ImageScroll/>
        </div>
    );
}

export default Page;