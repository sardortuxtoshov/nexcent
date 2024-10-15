import navbarlogo from "../../assets/Logo.svg";

export default function Navbar() {
    return (
        <div className="w-full">
            <div className="flex flex-wrap items-center justify-between p-4 md:justify-around">
                <div className="mt-4">
                    <a href="">
                        <img src={navbarlogo} alt="Logo" />
                    </a>
                </div>
                <div className="hidden md:flex list-none gap-6 mt-4">
                    <li className="">
                        <a
                            href="#"
                            className="font-inter text-base font-normal leading-6 text-[#18191F]"
                        >
                            Home
                        </a>
                    </li>
                    <li className="">
                        <a
                            href=""
                            className="font-inter text-base font-normal leading-6 text-[#18191F]"
                        >
                            Service
                        </a>
                    </li>
                    <li className="">
                        <a
                            href=""
                            className="font-inter text-base font-normal leading-6 text-[#18191F]"
                        >
                            Feature
                        </a>
                    </li>
                    <li className="">
                        <a
                            href=""
                            className="font-inter text-base font-normal leading-6 text-[#18191F]"
                        >
                            Product
                        </a>
                    </li>
                    <li className="">
                        <a
                            href=""
                            className="font-inter text-base font-normal leading-6 text-[#18191F]"
                        >
                            Testimonial
                        </a>
                    </li>
                    <li className="">
                        <a
                            href=""
                            className="font-inter text-base font-normal leading-6 text-[#18191F]"
                        >
                            FAQ
                        </a>
                    </li>
                </div>
                <div className="flex gap-4 mt-4 md:mt-0">
                    <button className="py-2 px-4 text-center text-[#4CAF4F] bg-custom-silver font-medium rounded-md">
                        Login
                    </button>
                    <button className="py-2 px-4 text-center bg-custom-green text-white rounded-md font-medium">
                        Sign up
                    </button>
                </div>
            </div>
            {/* Mobile menu */}
            <div className="md:hidden mt-4 flex flex-col items-center gap-4">
                <li className="list-none">
                    <a
                        href="#"
                        className="font-inter text-base font-normal leading-6 text-[#18191F]"
                    >
                        Home
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href=""
                        className="font-inter text-base font-normal leading-6 text-[#18191F]"
                    >
                        Service
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href=""
                        className="font-inter text-base font-normal leading-6 text-[#18191F]"
                    >
                        Feature
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href=""
                        className="font-inter text-base font-normal leading-6 text-[#18191F]"
                    >
                        Product
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href=""
                        className="font-inter text-base font-normal leading-6 text-[#18191F]"
                    >
                        Testimonial
                    </a>
                </li>
                <li className="list-none">
                    <a
                        href=""
                        className="font-inter text-base font-normal leading-6 text-[#18191F]"
                    >
                        FAQ
                    </a>
                </li>
            </div>
        </div>
    );
}
