import infoImages from "../../assets/infoimages1.png";
import infoImages1 from "../../assets/inforimages2.png";
import infoImages3 from "../../assets/infoimages3.png";
import infoImages4 from "../../assets/infoimages4.png";

export default function Info() {
    return (
        <div className="">
            <div className="flex gap-[72px] justify-center">
                <div className="mt-[80px]">
                    <h1 className="font-[600] w-[380px] text-[36px] text-[#4d4d4d]">
                        Helping a local{" "}
                        <span className="text-[#4CAF4F]">
                            business reinvent itself
                        </span>
                    </h1>
                    <p className="text-[16px] font-[400] text-[#18191f]">
                        We reached here with our hard work and dedication
                    </p>
                </div>
                <div className="mt-[60px] mb-[60px]">
                    <div className="flex gap-[50px]">
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages}
                                alt=""
                            />
                            <div className="">
                                <h3 className="font-[700] text-[36px] text-[#4d4d4d]">
                                    2,245,341
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                    Members
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages1}
                                alt=""
                            />
                            <div className="">
                                <h3 className="w-[200px] font-[700] text-[36px] text-[#4d4d4d]">
                                    46,328
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                    Clubs
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-[50px] mt-[40px]">
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages3}
                                alt=""
                            />
                            <div className="">
                                <h3 className="font-[700] text-[36px] text-[#4d4d4d]">
                                    828,867
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                    Event Bookings
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-[16px]">
                            <img
                                className="w-[48px] h-[48px] mt-[12px]"
                                src={infoImages4}
                                alt=""
                            />
                            <div className="">
                                <h3 className="w-[200px] font-[700] text-[36px] text-[#4d4d4d]">
                                    1,926,436
                                </h3>
                                <p className="text-[16px] font-[400] text-[#717171] -mt-[10px]">
                                    Payments
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
