import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryButton from "../Shared/PrimaryButton";
import { Link } from "react-router-dom";

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
            <div className="flex-1 px-5">
                <h3 className="text-xl text-primary font-bold">Appointment</h3>
                <h2 className="text-3xl text-white py-5">
                    Make an Appointment Today
                </h2>
                <p className="text-white pb-5">
                    Find your doctor easily with a minimum of effort. We've kept
                    everything organised for you. Ask for an appointment of the
                    doctor quickly with almost a single click. We take care of
                    the rest. Visit the doctor, take the service based on your
                    appointment. Get back to good health and happiness.
                </p>
                <div className="pb-5">
                    <PrimaryButton>
                        <Link to="/appointment">Get Started</Link>
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;
