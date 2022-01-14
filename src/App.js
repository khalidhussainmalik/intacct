import React from "react";
import Body from "./components/body/Body";
import Footer from './components/footer/Footer';
import Header from './components/header/Header'




import Navbar from "./components/header/Navbar";

function App(){
    return(
        <>
            <Navbar/>
            <Header/>
            <Body/>
            <Footer/>
        </>
    )
}
export default App;