import React from 'react';

export default function AboutMe() {
    return (
        <div className="bg-white text-black flex flex-col justify-center items-center rounded-lg shadow-lg p-10 m-5 space-y-6 max-w-3xl mx-auto border border-gray-200">
            <p className="text-xl font-semibold tracking-wide">👋 Hi there!</p>
            <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 text-transparent bg-clip-text">
                Morshed Ahmed
            </h1>
            <p className="text-xl font-medium">Student @ University of Central Florida</p>
            <p className="text-lg font-light max-w-xl text-center leading-relaxed">
                I’m passionate about building web applications. Currently working on projects using modern stacks like <span className="font-semibold">React</span>, <span className="font-semibold">ASP.NET</span>, <span className="font-semibold">Tailwind</span>, and more. Let’s build something amazing together!
            </p>
            <div className="flex space-x-4 mt-4">
            <button
    className="px-6 py-2 border-2 border-gray-800 text-gray-800 rounded-lg shadow hover:bg-gray-800 hover:text-white transition"
    onClick={() => window.location.href = 'mailto:gmorshedahmed@gmail.com'}
>
    Say Hi
</button>
            </div>
        </div>
    );
}
