import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from './assets/A-404-Page-Best-Practices-and-Design-Inspiration.jpg';

const ErrorPage = () => {
    return (
        <section className="h-screen flex flex-col justify-center items-center bg-[#e5f9ff]">
            <img src={errorImage} alt="Error" className="max-w-md mb-8" />
            <p className="text-lg text-gray-600 mb-4">Oops! Something went wrong.</p>
            <Link to="/" className="my-btn">
                Back to Homepage
            </Link>
        </section>
    );
};

export default ErrorPage;