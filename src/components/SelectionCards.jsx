/* eslint-disable react/prop-types */
import { PiArrowCircleRightBold } from "react-icons/pi";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";

const Content = [
    {
        title: "À propos de nous",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Découvrir Notre Identité",
    },
    {
        title: "Brise-roches hydrauliques",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Voir plus",
    },
    {
        title: "Pièces jointes",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Nos pièces jointes",
    },
    {
        title: "Outils",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error iste repellendus nihil ullam tenetur laborum magnam perferendis ab perspiciatis dolore cum dolor similique fugiat natus, est quidem dolorem facere molestiae",
        btnText: "Nos outils",
    },
];


function SelectionCards({ selected }) {
    // console.log(Content[selected-1]);
    return (
        <div className="md:row-span-5 md:col-span-7 p-4 flex items-center justify-center">
            <div className="md:w-4/6 px-2 py-3 md:px-4  md:py-5 rounded-xl bg-Amber shadow-lg border-4 border-Black flex flex-col gap-2">
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
                        className="rounded-lg w-full h-60 md:h-72 object-cover"
                    />
                </div>
                <div className="self-center text-lg md:text-xl text-Black font-bold">
                    {Content[selected - 1].title}
                </div>
                <div className="text-justify line-clamp-3 md:line-clamp-2 font-semibold text-lg md:text-xl text-white">
                    {Content[selected - 1].text}
                </div>
                <div className="flex justify-center items-center gap-2 text-lg md:text-xl font-bold bg-Black text-Amber w-4/6 py-2 rounded-lg cursor-pointer self-center mt-2">
                    {Content[selected - 1].btnText}
                    <PiArrowCircleRightBold className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
}

export default SelectionCards;
