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
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people3,
        },
        {
            _id: 1,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people1,
        },
        {
            _id: 2,
            name: "Winson Herry",
            review: "",
            location: "California",
            img: people2,
        },
        {
            _id: 3,
            name: "Winson Herry",
            review: "",
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
