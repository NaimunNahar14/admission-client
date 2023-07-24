import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleClass = () => {
    const { id } = useParams();
    const [college, setCollege] = useState(null);
    const url = `https://admission-server-rouge.vercel.app/class/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCollege(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);

    if (!college) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-5 mb-5'>
            <h2 style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}>
                {college.college_name}
            </h2>

          
            <img src={college.college_image} alt="College" />

          
            <h3 style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}>Admission Process:</h3>
            {college.admission_process && college.admission_process.requirements && (
                <ul>
                    {college.admission_process.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                    ))}
                </ul>
            )}
            {college.admission_process && college.admission_process.steps && (
                <ol>
                    {college.admission_process.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            )}

           
            <h3 style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}>Events:</h3>
            {college.events && (
                <ul>
                    {college.events.map((event, index) => (
                        <li key={index}>
                            {event.event_name} - {event.date}: {event.description}
                        </li>
                    ))}
                </ul>
            )}

         
            <h3 style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}>Research History:</h3>
            {college.research_history && (
                <ul>
                    {college.research_history.map((research, index) => (
                        <li key={index}>
                            {research.year}: {research.event_name} - {research.description}
                        </li>
                    ))}
                </ul>
            )}

        
            <h3 style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}>Sports:</h3>
            {college.sports && (
                <ul>
                    {college.sports.map((sport, index) => (
                        <li key={index}>
                            {sport.category}: {sport.description}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SingleClass;
