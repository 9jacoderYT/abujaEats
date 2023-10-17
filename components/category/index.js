"use client";
import { events } from "@/lib/events";
import { useState } from "react";

export default function Category() {
  const [details, setDetails] = useState(events[0]);

  return (
    <>
      <div className="carousel">
        {events.map((event, index) => (
          <div className="carousel-item block m-2" key={index}>
            <img
              src={`/images/${event.name}`}
              alt="Streetfood"
              className="rounded-lg h-[200px] md:h-[300px] hover:cursor-pointer"
              onClick={() => {
                setDetails(event);
              }}
            />
          </div>
        ))}
      </div>
      <br />

      <div className="max-w-7xl mx-auto block md:flex bg-[#fff7e1] p-4 space-x-5 mt-3">
        <div>
          <img
            src={`/images/${details.name}`}
            alt="logo"
            className="rounded-lg"
          />
        </div>

        <div className="mt-5 md:mt-0">
          <div className="text-5xl font-extrabold text-black mb-5 text-left border-b-2 border-black pb-5">
            {details.title}
          </div>
          <p className="text-xl font-light text-title md:mt-0 text-left">
            {details.details}
          </p>
          <p className="mt-3 text-2xl">Date : {details.date}</p>
        </div>
      </div>
    </>
  );
}
