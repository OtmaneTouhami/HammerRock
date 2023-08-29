/* eslint-disable react/prop-types */
import { PiArrowCircleRightBold } from "react-icons/pi";
import img1 from "../assets/images/img1.png";
import img2 from "../assets/images/img2.png";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.png";

const Content = [
    {
        title: "About Us",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Uncover Our Identity",
    },
    {
        title: "Hydraulic Breaker",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "See more",
    },
    {
        title: "Attachments",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Our attachments",
    },
    {
        title: "Tools",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Our tools",
    },
];


function SelectionCards({ selected }) {
    // console.log(Content[selected-1]);
    return (
        <div className="row-span-5 col-span-7 p-4 flex items-center justify-center">
            <div className="w-4/6 px-4 py-5 rounded-xl bg-Boulder shadow-lg border-4 border-Amber flex flex-col gap-2">
                <div>
                    <img
                        src={
                            selected === 1
                                ? img1
                                : selected === 2
                                ? img2
                                : selected === 3
                                ? img3
                                : img4
                        }
                        alt={Content[selected - 1].title}
                        className="rounded-lg w-full h-72 object-cover"
                    />
                </div>
                <div className="self-center text-xl text-Amber font-bold">
                    {Content[selected - 1].title}
                </div>
                <div className="text-justify line-clamp-2 font-semibold text-lg text-white">
                    {Content[selected - 1].text}
                </div>
                <div className="flex justify-center items-center gap-2 text-xl font-bold bg-Black text-Amber w-4/6 py-2  rounded-lg cursor-pointer self-center mt-2">
                    {Content[selected - 1].btnText}
                    <PiArrowCircleRightBold className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
}

export default SelectionCards;
