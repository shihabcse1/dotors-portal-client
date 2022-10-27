import React from "react";
import quote from "../../assets/icons/quote.svg";
import people1 from "../../assets/images/people1.png";
import people2 from "../../assets/images/people2.png";
import people3 from "../../assets/images/people3.png";
import Review from "./Review";

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: "Winson Ron",
            review: "This portal have even more helpful options. Patients may be able to schedule or cancel appointments",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Roi Herry",
            review: "Since digital options are becoming more available in the health industry, it’s no surprise that there was an increase.",
            location: "Florida",
            img: people2,
        },
        {
            _id: 3,
            name: "Hardik Pandey",
            review: "People can log on to their account to view their PHI such as lab results, immunizations, prescriptions, appointment visit notes.",
            location: "Texas",
            img: people3,
        },
    ];

    return (
        <section className="my-28">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">
                        Testimonials
                    </h4>
                    <h2 className="text-3xl">What Our Patients Say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {reviews.map((review) => (
                    <Review key={review._id} review={review}></Review>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
