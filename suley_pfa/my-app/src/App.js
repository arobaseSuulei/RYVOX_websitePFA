import Logo from "./components/Logo";
import Produits from "./components/Produits";
import Bottom from "./components/Bottom";

export default function App(){


    //
    return(
        <div>



            {/*logo */}
            <div>
                <Logo/>
            </div>



            {/*produit*/}
            <div>
                <Produits/>
            </div>





            {/*bottom*/}
            <div>
                <Bottom/>
                <Logo/>
            </div>





        </div>
    );
}