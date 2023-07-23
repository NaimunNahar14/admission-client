import React from 'react';
import { Link } from 'react-router-dom';

const CollegeCard = ({ college }) => {
    return (
        <div className="flex-shrink-0 max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-2 mt-10">
            <img className="w-full h-40 object-cover object-center" src={college.college_image} alt={college.college_name} />
            <div className="p-4">
                <h2 style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }} className="text-xl font-semibold mb-2">{college.college_name}</h2>
                <p style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}className="mb-2">Admission Dates:</p>
                <ul className="list-disc pl-4 mb-2">
                    <li>Fall: {college.admission_dates.fall}</li>
                    <li>Spring: {college.admission_dates.spring}</li>
                    <li>Summer: {college.admission_dates.summer}</li>
                </ul>
                <p style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }} className="mb-2">Number of Researches: {college.research_history.length}</p>
                <Link to={`/class/${college._id}`} className="text-blue-500 font-semibold hover:underline">
                    Details
                </Link>
            </div>
        </div>
    );
};

export default CollegeCard;
