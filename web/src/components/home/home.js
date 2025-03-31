import React from "react";
import Header from "../header/header";
import Banner from "../banner/banner";
import ShowProduct from "../showProduct/showProduct";
import KeyBoard from "../keyboard/keyboard"
import GamingProduct from "../gameproduct/gamingProduct";
import Footer from "../footer/footer";

import SlideBanner from "../slidebanner/slideBanner";
function Home() {
    return ( 
        <div>
  
            <Header/> 
            <Banner/> 
            <ShowProduct/>
            <KeyBoard/>
            <GamingProduct/>
            <SlideBanner/>
            <Footer/>

            
        </div>
     );
}

export default Home;