import { FaArrowRight } from "react-icons/fa6";

export default function Wrapper() {
    return (
        <div className="mb-[90px]">
            <div className="mt-[48px]">
                <h2 className="text-[#4d4d4d] text-[36px] text-center font-[600]">
                    Caring is the new marketing
                </h2>
                <p className="w-[600px] text-[#717171] m-auto text-center mt-2">
                    The Nexcent blog is the best place to read about the latest
                    membership insights, trends and more. See who's joining the
                    community, read about how our community are increasing their
                    membership income and lot's more.​
                </p>
                <div className="flex gap-6 justify-center mt-[16px] mb-[140px]">
                    <div className="bg-wrapper-pattern rounded w-[360px] h-[280px]">
                        <div className="w-[300px] m-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-[285px] font-[600] text-[20px] text-[#717171]">
                                Creating Streamlined Safeguarding Processes with
                                OneRen
                            </h4>
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px] mb-3 ml-[90px]">
                                Readmore <FaArrowRight className="mt-2 " />
                            </h4>
                        </div>
                    </div>
                    <div className="bg-wrapper1-pattern rounded w-[360px] h-[280px]">
                        <div className="w-[300px] m-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-[285px] font-[600] text-[20px] text-[#717171]">
                                What are your safeguarding responsibilities and
                                how can you manage them?
                            </h4>
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px] mb-3 ml-[90px]">
                                Readmore <FaArrowRight className="mt-2" />
                            </h4>
                        </div>
                    </div>
                    <div className="bg-wrapper2-pattern rounded w-[360px] h-[280px]">
                        <div className="w-[300px] m-auto text-center bg-[#F5F7FA] p-2 rounded-[8px] mt-[190px] shadow-lg">
                            <h4 className="w-[270px] font-[600] text-[20px] text-[#717171]">
                                Revamping the Membership Model with Triathlon
                                Australia
                            </h4>
                            <h4 className="cursor-pointer flex gap-2 text-[#4CAF4F] font-[600] mt-[7px] text-[20px] mb-3 ml-[90px]">
                                Readmore <FaArrowRight className="mt-2 " />
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
