import React from 'react';
import projectData from '../data/projectdata';

export default function Projects() {
    return (
        <div className="p-10 flex justify-center my-10 mx-96">
            <div className="grid grid-cols-3 gap-10">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-white p-5 text-center border-4 border-black rounded-xl"
                    >
                        <img src={project.image} alt={project.title} className="mb-4 w-full h-32 object-cover rounded-t-xl" />
                        <h1 className="text-lg font-bold">{project.title}</h1>
                        <p className="text-md font-semibold">{project.stacks.join(', ')}</p>
                        <p className="text-md font-bold">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
