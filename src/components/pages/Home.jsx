import Asida from "../asida/asida";
import Footer from "../footer/footer";
import HeroCarousel from "../hero/coruse";
import Info from "../info/info";
import Main from "../main/main";
import Navbar from "../navbar/Navbar";
import TallFooter from "../tallfooter/tallfooter";
import Wrap from "../wrap/wrap";
import Wrapper from "../wrapper/wrapper";

export default function Home() {
    return (
        <div className=" m-auto overflow-hidden ">
            <section className="bg-custom-silver">
                <div className="container m-auto bg-custom-silver">
                    <Navbar />
                    <HeroCarousel />
                </div>
            </section>
            <Asida />
            <section className="bg-custom-silver">
                <Info />
            </section>
            <Main />
            <section className="bg-custom-silver py-[32px]">
                <Wrap />
            </section>
            <Wrapper />
            <section className="bg-custom-silver py-[32px]">
                <TallFooter />
            </section>
            <section className="bg-[#263238] py-[32px] ">
                <Footer />
            </section>
        </div>
    );
}
