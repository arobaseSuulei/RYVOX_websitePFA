import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import Home from "./components/Home.jsx";

export default function App() {


    useEffect(() => {
        document.title = "Ryvox";
    }, []);



    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </Router>
    );
}