import { data } from "autoprefixer";
import { format } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailiableAppointments = ({ date }) => {
    //const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formatDate = format(date, "PP");

    const {
        isLoading,
        refetch,
        data: services,
    } = useQuery(["available", formatDate], () =>
        fetch(
            `https://aqueous-garden-58368.herokuapp.com/available?date=${formatDate}`
        ).then((res) => res.json())
    );

    if (isLoading) {
        return <Loading></Loading>;
    }

    // useEffect(() => {
    //     fetch(`https://aqueous-garden-58368.herokuapp.com/available?date=${formatDate}`)
    //         .then((res) => res.json())
    //         .then((data) => setServices(data));
    // }, [formatDate]);

    return (
        <div>
            <h4 className="text-xl text-secondary text-center my-12">
                Available Appointments on {format(date, "PP")}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services?.map((service) => (
                    <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>
                ))}
            </div>
            {treatment && (
                <BookingModal
                    date={date}
                    treatment={treatment}
                    setTreatment={setTreatment}
                    refetch={refetch}
                ></BookingModal>
            )}
        </div>
    );
};

export default AvailiableAppointments;
