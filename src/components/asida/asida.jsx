import asidaimages1 from "../../assets/asidaimages1.png";
import asidaimages2 from "../../assets/asidaimages2.png";
import asidaimages3 from "../../assets/asidaimages3.png";
import asidaimages4 from "../../assets/asidaimages4.png";
import asidaimages5 from "../../assets/asidaimages5.png";
import asidaimages6 from "../../assets/asidaimages6.png";

import asidaimages7 from "../../assets/asidaimages7.png";
import asidaimages8 from "../../assets/asidaimages8.png";
import asidaimages9 from "../../assets/asidaimages9.png";

export default function Asida() {
    return (
        <div className="">
            <h2 className="font-[600] text-[36px] text-center text-[#4D4D4D]">
                Our Clients
            </h2>
            <p className="text-center text-[#717171] text-[16px] font-[400]">
                We have been working with some Fortune 500+ clients
            </p>
            <div className="w-[1152px] flex gap-[136px] m-auto mt-[41px]">
                <img src={asidaimages1} alt="" />
                <img src={asidaimages2} alt="" />
                <img src={asidaimages3} alt="" />
                <img src={asidaimages4} alt="" />
                <img src={asidaimages5} alt="" />
                <img src={asidaimages6} alt="" />
                <img src={asidaimages3} alt="" />
            </div>
            <h2 className="w-[542px] m-auto text-center text-[36px] text-[#4D4D4D] mt-[40px] font-[600]">
                Manage your entire community in a single system
            </h2>
            <p className="text-center text-[16px] mt-[8px] text-[#717171]">
                Who is Nextcent suitable for?
            </p>
            <div className="flex gap-[127px] justify-center mt-[16px]">
                <div className="card_shadow rounded p-5   ">
                    <img
                        className="w-[65px] h-[56px] ml-[85px] mb-4"
                        src={asidaimages7}
                        alt=""
                    />
                    <h3 className="w-[240px] font-[700] text-[28px] text-center ">
                        Membership Organisations
                    </h3>
                    <p className="w-[240px] text-center text-[14px] font-[400] ">
                        Our membership management software provides full
                        automation of membership renewals and payments
                    </p>
                </div>
                <div className=" card_shadow rounded p-5">
                    <img src={asidaimages8} className="ml-[85px] mb-4" alt="" />
                    <h3 className="w-[240px] font-[700] text-[28px] text-center">
                        National Associations
                    </h3>
                    <p className="w-[240px] text-center text-[14px] font-[400]">
                        Our membership management software provides full
                        automation of membership renewals and payments
                    </p>
                </div>
                <div className=" card_shadow rounded p-5">
                    <img src={asidaimages9} className="ml-[75px] mb-4" alt="" />
                    <h3 className="w-[230px] font-[700] text-[28px] text-center">
                        Clubs And Groups
                    </h3>
                    <p className="w-[240px] text-center text-[14px] font-[400]">
                        Our membership management software provides full
                        automation of membership renewals and payments
                    </p>
                </div>
            </div>
            <div className="flex gap-[50px] mt-[100px] justify-center mb-[80px]">
                <div className="bg-asida-pattern h-[328px]  w-[422px]  bg-cover"></div>
                <div className="">
                    <h2 className="font-[600] text-[36px] w-[550px] text-[#4d4d4d]">
                        The unseen of spendng three years at Pixelgrade
                    </h2>
                    <p className="w-[550px] text-[14px] font-[400] text-[#717171] mt-[16px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed sit amet justo ipsum. Sed accumsan quam vitae est
                        varius fringilla. Pellentesque placerat vestibulum lorem
                        sed porta. Nullam mattis tristique iaculis. Nullam
                        pulvinar sit amet risus pretium auctor. Etiam quis massa
                        pulvinar, aliquam quam vitae, tempus sem. Donec
                        elementum pulvinar odio.
                    </p>
                    <button className="py-3 px-8 bg-custom-green rounded text-white mt-8 font-[500] text-[16px]">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
}
