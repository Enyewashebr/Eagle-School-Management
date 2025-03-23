"use client"
import { title } from 'process';
import React, { useState } from 'react'
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import Image from 'next/image';
type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


// Temporary data
const events = [
    {
        id:1,
        title:"Event 1",
        time:"12:00PM - 2:00PM",
        description:"Event description"
    },
    {
        id:2,
        title:"Event 2",
        time:"12:00PM - 2:00PM",
        description:"Event description"

    },
    {
        id:3,
        title:"Event 3",
        time:"12:00PM - 2:00PM",
        description:"Event description" 
    }
]   

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className=" flex items-center justify-between ">
              <h1 className='text-gray-600  font-semibold'>{event.title}</h1>
              <span className='text-xs text-gray-300'>{event.time}</span>
            </div>
            <p className='mt-2text-gray-400 text-sm'>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalendar

