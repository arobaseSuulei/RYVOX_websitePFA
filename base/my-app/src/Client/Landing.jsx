import Navbar from "../components/Navbar.jsx";
import Banner from "../components/Banner.jsx";
import Navigation from "../components/Navigation.jsx";
import {Card} from "@radix-ui/themes";
import Cards from "../components/Cards.jsx";

export default function Landing() {
    return(
        <div className={'font-poppins flex flex-col gap-6  min-h-screen'}>

            <div>
                <Navbar/>
            </div>

            <div>
                <Navigation/>
            </div>



            <div>
                <Cards/>
            </div>

        </div>
    );
}