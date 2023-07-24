import React, { useEffect, useState } from 'react';
import CollegeCard from './CollegeCard';

const College = () => {
    const [colleges, setColleges] = useState([]);

  useEffect(() => {
    fetch('https://admission-server-rouge.vercel.app/class')
      .then((res) => res.json())
      .then((data) => setColleges(data))
      .catch((error) => console.error('Error fetching colleges:', error));
  }, []);
    return (
        
      
      <div className="flex overflow-x-auto">
        {colleges.map((college) => (
          <CollegeCard key={college._id} college={college} />
        ))}
      </div>
    
    );
};

export default College;