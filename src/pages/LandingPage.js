import React from "react";

import {  Box, Divider} from "@chakra-ui/react";

import HeroImage from "../components/HeroImage";
import TvSeries from "../components/TvSeries";
import AboutUs from "../components/AboutUs";
import ForKids from "../components/ForKids";
import CompatibleDevices from "../components/CompatibleDevices";
import LoginRegister from "../components/LoginRegister";
import Footer from "../components/Footer";
import AuthBottomNav from "../components/AuthBottomNav";




function LandingPage(){
    return (
        <Box w='full' fontFamily="poppins, sans-serif">
            <HeroImage/>
            <TvSeries/>
            <AboutUs/>
            <ForKids/>
            <CompatibleDevices/>
            <LoginRegister/>
            <Footer/>
            <Divider orientation="horizontal" borderColor="black"/>
            <AuthBottomNav/>
        </Box>
    );
};

export default LandingPage;