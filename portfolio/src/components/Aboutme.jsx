import React from 'react';

export default function AboutMe() {
    return (
        <div className="flex items-center justify-center px-12 bg-black dark:bg-gray-950">
            <div className="max-w-lg mx-auto my-10 bg-black rounded-lg p-[2px] bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
                <div className="bg-black rounded-lg p-5">
                    <h2 className="text-center text-white text-2xl font-semibold mt-3">G Morshed Ahmed</h2>
                    <p className="text-center text-white mt-1">Software Engineer</p>
                    <div className="mt-5">
                        <h3 className="text-xl font-semibold text-white">Bio</h3>
                        <p className="text-white mt-2">A student interested in software engineering with experience in developing web and mobile applications. Skilled in JavaScript, React, and Node.js.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
