import React from "react";
import Footer from "../Shared/Footer";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "../Home/Review";

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Dex",
            review: "It's a secure websites that give people access to their personal health information from anywhere, at any time.",
            location: "Texas",
            img: people1,
        },
        {
            _id: 2,
            name: "Herry Porter",
            review: "This portal have even more helpful options. Patients may be able to schedule or cancel appointments",
            location: "California",
            img: people2,
        },
        {
            _id: 3,
            name: "Harlen axan",
            review: "Since digital options are becoming more available in the health industry, it’s no surprise that there was an increase.",
            location: "Florida",
            img: people3,
        },
        {
            _id: 1,
            name: "Alex Ron",
            review: "People can log on to their account to view their PHI such as lab results, immunizations, prescriptions, appointment visit notes.",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Siri Ron",
            review: "But despite these convenient tools, most adults still aren’t using these services. ",
            location: "San fransisco",
            img: people2,
        },
        {
            _id: 3,
            name: "Ajoy Kumar",
            review: "Cool... pay their bills online, request prescription refills, and more.",
            location: "California",
            img: people3,
        },
    ];

    return (
        <div>
            <section className="my-28">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {reviews.map((review) => (
                        <Review key={review._id} review={review}></Review>
                    ))}
                </div>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Reviews;
