import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const AvailiableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("service.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div>
            <h4 className="text-xl text-secondary text-center">
                Available Appointments on {format(date, "PP")}
            </h4>
        </div>
    );
};

export default AvailiableAppointments;
