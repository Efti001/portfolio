import React from 'react';
import timelineData from '../data/timelineData';

export default function Timeline() {
    return (
        <div className="p-10 flex flex-col justify-center items-center text-center">
            <h1 className="text-2xl font-bold text-center p-5">Education Timeline</h1>
            <div className="relative flex border-t-2 border-gray-300">
                {timelineData.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col justify-center items-center mx-10 w-64 h-64 text-white bg-cover bg-center rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
                        style={{ backgroundImage: `url(${item.image})` }}
                    >
                        <div className="bg-black bg-opacity-50 p-4 rounded-lg hover:bg-opacity-75 transition duration-300">
                            <p className="text-sm font-semibold">{item.year}</p>
                            <h2 className="text-lg font-bold">{item.institution}</h2>
                            <p className="text-xs">{item.degree}</p>
                        </div>
                        <a
                            href={item.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0"
                            aria-label={`Visit ${item.institution}'s website`}
                        ></a>
                    </div>
                ))}
            </div>
        </div>
    );
}
