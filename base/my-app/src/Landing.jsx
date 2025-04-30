import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Navigation from "./components/Navigation.jsx";

export default function Landing() {
    return(
        <div className={'font-poppins flex flex-col gap-32  min-h-screen'}>

            <div>
                <Navbar/>
            </div>

            <div>
                <Navigation/>
            </div>

        </div>
    );
}