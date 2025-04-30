import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useEffect} from "react";
import Home from "./Home.jsx";
import Admin from "./Admin/Admin.jsx";
import AuthPage from "./Auth.jsx";



export default function App() {


    useEffect(() => {
        document.title = "Ryvox";
    }, []);



    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/auth" element={<AuthPage/>}/>
            </Routes>
        </Router>
    );
}