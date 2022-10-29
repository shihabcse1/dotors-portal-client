import React from "react";
import { Link } from "react-router-dom";
import chair from "../../assets/images/chair.png";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl" alt="chair" />
                <div>
                    <h1 className="text-5xl font-bold">
                        Your New Smile Starts Here
                    </h1>
                    <p className="py-6">
                        View your personal health information; Communicate with
                        your providers, View and print testing and lab results,
                        Review and print recent visit summaries.
                    </p>
                    <PrimaryButton>
                        <Link to="/appointment">Get Started</Link>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;
