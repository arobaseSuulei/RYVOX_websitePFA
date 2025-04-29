import Navbar from "./components/Navbar.jsx";
import Banner from "./components/Banner.jsx";
import Navigation from "./components/Navigation.jsx";

export default function Landing() {
    return(
        <div className={'font-poppins flex flex-col gap-32 bg-gradient-to-br from-orange-100 via-rose-50 to-orange-100 min-h-screen'}>

            <div>
                <Navbar/>
            </div>

            <div>
                <Navigation/>
            </div>

        </div>
    );
}