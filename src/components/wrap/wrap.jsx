import wrapimages from "../../assets/wrapimages.png";

import asidaimages1 from "../../assets/asidaimages1.png";
import asidaimages2 from "../../assets/asidaimages2.png";
import asidaimages3 from "../../assets/asidaimages3.png";
import asidaimages4 from "../../assets/asidaimages4.png";
import asidaimages5 from "../../assets/asidaimages5.png";
import asidaimages6 from "../../assets/asidaimages6.png";

import { FaArrowRight } from "react-icons/fa6";

export default function Wrap() {
    return (
        <div className="">
            <div className="flex gap-[72px] justify-center">
                <img src={wrapimages} alt="" />
                <div className="">
                    <p className="w-[700px] font-[500] text-[#717171]">
                        Maecenas dignissim justo eget nulla rutrum molestie.
                        Maecenas lobortis sem dui, vel rutrum risus tincidunt
                        ullamcorper. Proin eu enim metus. Vivamus sed libero
                        ornare, tristique quam in, gravida enim. Nullam ut
                        molestie arcu, at hendrerit elit. Morbi laoreet elit at
                        ligula molestie, nec molestie mi blandit. Suspendisse
                        cursus tellus sed augue ultrices, quis tristique nulla
                        sodales. Suspendisse eget lorem eu turpis vestibulum
                        pretium. Suspendisse potenti. Quisque malesuada enim
                        sapien, vitae placerat ante feugiat eget. Quisque
                        vulputate odio neque, eget efficitur libero condimentum
                        id. Curabitur id nibh id sem dignissim finibus ac sit
                        amet magna.
                    </p>
                    <h4 className="text-[20px] font-[600] text-[#4CAF4F] mt-[16px]">
                        Tim Smith
                    </h4>
                    <p className="font-[400] text-[16px] text-[#89939E] mt-2">
                        British Dragon Boat Racing Association
                    </p>
                    <div
                        className="flex gap-0
                    "
                    >
                        <div className="flex gap-[41px] mt-[41px]">
                            <img src={asidaimages1} alt="" />
                            <img src={asidaimages2} alt="" />
                            <img src={asidaimages3} alt="" />
                            <img src={asidaimages4} alt="" />
                            <img src={asidaimages5} alt="" />
                            <img src={asidaimages6} alt="" />
                            <a href="">
                                <h4 className=" cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px]">
                                    Meet all customers{" "}
                                    <FaArrowRight className="mt-2" />
                                </h4>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
