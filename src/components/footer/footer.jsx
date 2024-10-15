import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa6";
import footerLogo from "../../assets/FooterLogo.svg";
import { LiaTelegramPlane } from "react-icons/lia";

export default function Footer() {
    return (
        <div className="w-[1440px] m-auto ">
            <footer className="w-[1440px] flex justify-center justify-between gap-[125px]">
                <div className="">
                    <div className="">
                        <div className="">
                            <a href="">
                                <img src={footerLogo} alt="" />
                            </a>
                            <p className="font-[400] text-[14px] text-[#F5F7FA] mt-[40px]">
                                Copyright © 2020 Nexcent ltd.
                            </p>
                            <p className="font-[400] text-[14px] text-[#f5f7fa] mt-1    ">
                                All rights reserved
                            </p>
                            <div className=" flex gap-[16px] mt-[40px]">
                                <a
                                    className="w-[38px] h-[38px] rounded-full bg-white opacity-[10%]  "
                                    href=""
                                >
                                    <div className="">
                                        <FaInstagram className="ml-[9px] mt-[8px] text-[20px]" />
                                    </div>
                                </a>
                                <a
                                    className="w-[38px] h-[38px] rounded-full bg-white opacity-[10%]  "
                                    href=""
                                >
                                    <div className="">
                                        <FaInstagram className="ml-[9px] mt-[8px] text-[20px]" />
                                    </div>
                                </a>
                                <a
                                    className="w-[38px] h-[38px] rounded-full bg-white opacity-[10%]  "
                                    href=""
                                >
                                    <div className="">
                                        <FaTwitter className="ml-[9px] mt-[8px] text-[20px]" />
                                    </div>
                                </a>
                                <a
                                    className="w-[38px] h-[38px] rounded-full bg-white opacity-[10%]  "
                                    href=""
                                >
                                    <div className="">
                                        <FaYoutube className="ml-[9px] mt-[8px] text-[20px]" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-[100px]">
                    <div className="">
                        <h4 className="font-[600] text-[20px] text-white">
                            Company
                        </h4>
                        <div className=" flex flex-col">
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-[24px]"
                                href=""
                            >
                                About us
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Blog
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Contact us
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Pricing
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Testimonials
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="font-[600] text-[20px] text-white">
                            Support
                        </h4>
                        <div className=" flex flex-col ">
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-[24px]"
                                href=""
                            >
                                Help center
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2 "
                                href=""
                            >
                                Terms of service
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Legal
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Privacy policy
                            </a>
                            <a
                                className="text-white font-[400] font-inter text-[14px] mt-2"
                                href=""
                            >
                                Status
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="font-[600] text-[20px] text-white">
                            Stay up to date
                        </h4>
                        <div className=" flex flex-col ">
                            <form action="flex flex-col">
                                <input
                                    className="w-[255px] h-[40px] mt-[25px] rounded-lg pl-2 opacity-[20%]"
                                    type="email"
                                    placeholder="Your email address"
                                />
                                <button type="submit">
                                    <LiaTelegramPlane className="absolute -ml-10 -mt-[23px] text-[30px] text-white" />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
