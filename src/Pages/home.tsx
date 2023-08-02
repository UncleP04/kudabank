import Content from "@/components/content";
import Introduction from "@/components/introduction";
import React from "react";

const HomePage: React.FC = () => {
    return (
        <div className="p-4">
            <Introduction />
            <Content />
        </div>
    )
}

export default HomePage;