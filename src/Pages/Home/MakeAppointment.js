import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";

const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`,
            }}
            className="flex justify-center items-center"
        >
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-100px]" src={doctor} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white">
                    Make an Appointment Today
                </h2>
                <p className="text-white">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aspernatur, esse vero! Minima accusamus sit obcaecati
                    provident sapiente quia perferendis reiciendis facilis eaque
                    nesciunt? Optio voluptates adipisci sed fugit dolores
                    veritatis odit! Assumenda ad facere pariatur dolorum nam
                    voluptatibus totam inventore numquam? Dolor quo voluptas,
                    ipsam porro alias repellat eligendi nulla?
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;
