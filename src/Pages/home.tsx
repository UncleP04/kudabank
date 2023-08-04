import Global from "@/components/global";
import Content from "@/components/content";
import Introduction from "@/components/introduction";
import StressFree from "@/components/stressfree";
import React from "react";
import Invest from "@/components/invest";
import Money from "@/components/money";
import Connect from "@/components/connect";
import Footer from "@/components/footer";

const HomePage: React.FC = () => {
    return (
        <div className="">
            <Introduction />
            <Content />
            <StressFree />
            <Global />
            <Invest />
            <Money />
            <Connect />
            <Footer />
        </div>
    )
}

export default HomePage;