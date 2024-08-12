import React from 'react';
import projectData from '../data/projectdata';

export default function Projects() {
    return (
        <div className="p-10 flex justify-center my-10 mx-96">
            <div className="grid grid-cols-3 gap-10">
                {projectData.map((project) => (
                    <div
                        key={project.id}
                        className="bg-black text-white p-5 text-center border-4 border-white rounded-xl"
                    >
                        <h1 className="text-lg font-bold">{project.title}</h1>
                        <p className="text-md font-semibold border border-dotted border-gray-500 inline-block px-2 py-1 rounded">
                            {project.stacks.join(', ')}
                        </p>
                        <p className="text-md font-bold mt-2">{project.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
