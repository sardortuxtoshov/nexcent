import { FaArrowRight } from "react-icons/fa6";

export default function TallFooter() {
    return (
        <div className="">
            <div className="">
                <h1 className="w-[800px] text-[64px] m-auto text-center font-[600] text-[#263238]">
                    Pellentesque suscipit fringilla libero eu.
                </h1>
                <button className="flex gap-[8px] bg-[#4CAF4F] px-6 py-[14px] rounded font-[500] text-[16px] text-white m-auto mt-[40px]">
                    Get a Demo <FaArrowRight className="mt-[6px]" />
                </button>
            </div>
        </div>
    );
}
