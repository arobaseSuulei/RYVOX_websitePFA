import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";


export default function Navbar() {
    return(
        <div>
            <div
                className={'py-4 flex bg-blue-600 text-white font-semibold gap-8 items-center justify-between sm:px-24 '}>

                <div className={''}>
                    <Link to="/">
                        <p>
                            <img className={'w-12'} src={'../../public/logo.png'} alt="logo"/>
                        </p>
                    </Link>
                </div>

                <div className={'flex items-center gap-6'}>

                    <p>Home</p>
                    <p>Catalogue</p>

                </div>


                <div className={'flex items-center gap-2'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
                    </svg>


                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                         stroke="currentColor" className="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                    </svg>


                </div>

            </div>

            <Nav/>
        </div>
    );
}