import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-black  rounded-lg p-4 text-center flex flex-col items-center space-y-4 border border-gray-200">
            <div className="flex flex-col space-y-4">
                {/* GitHub Link */}
                <a
                    href="https://github.com/efti001"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-white hover:transition-transform transform hover:scale-110"
                >
                    <FontAwesomeIcon icon={faGithub} className="h-8 w-8" />
                </a>

                {/* LinkedIn Link */}
                <a
                    href="https://www.linkedin.com/in/efti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="text-white hover:text-blue-600 transition"
                >
                    <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8" />
                </a>
            </div>
        </footer>
    );
}
