import React, { useState } from "react";
import Footer from "../Shared/Footer";
import AppointmentBanner from "./AppointmentBanner";
import AvailiableAppointments from "./AvailiableAppointments";

const Appointment = () => {
    const [date, setDate] = useState(new Date());

    return (
        <div>
            <AppointmentBanner
                date={date}
                setDate={setDate}
            ></AppointmentBanner>
            <AvailiableAppointments date={date}></AvailiableAppointments>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;
