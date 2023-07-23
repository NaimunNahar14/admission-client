import React, { useEffect, useState } from 'react';
import { Card, CardMedia, CardContent, Typography, List, ListItem, ListItemText } from '@mui/material';
import { Link } from 'react-router-dom';

const Classes = () => {
    const [colleges, setColleges] = useState([]);

    
    const url = 'http://localhost:5000/class';

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setColleges(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [url]);


    return (
        <div className="p-4 space-y-4">
            <div className="flex flex-wrap -mx-2">
                {colleges.map((college, index) => (
                    <div key={index} className="px-2 w-full sm:w-1/2 md:w-1/3">
                        <Card>
                            <CardMedia
                                component="img"
                                image={college.college_image}
                                alt="College"
                               
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: '#2b6cb0' }}>
                                    {college.college_name}
                                </Typography>
                                <Typography variant="subtitle1" component="div" style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: 'blue' }}>
                                    Admission Dates:
                                </Typography>
                                <List>
                                    <ListItem>
                                        <ListItemText primary={`Fall: ${college.admission_dates.fall}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Spring: ${college.admission_dates.spring}`} />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemText primary={`Summer: ${college.admission_dates.summer}`} />
                                    </ListItem>
                                </List>
                                <Typography variant="subtitle1" component="div" style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: 'blue' }}>
                                    Events:
                                </Typography>
                                <List>
                                    {college.events.map((event, i) => (
                                        <ListItem key={i}>
                                            <ListItemText
                                                primary={`${event.event_name} - ${event.date}: ${event.description}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="subtitle1" component="div" style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: 'blue' }}>
                                    Research History:
                                </Typography>
                                <List>
                                    {college.research_history.map((research, i) => (
                                        <ListItem key={i}>
                                            <ListItemText
                                                primary={`${research.year}: ${research.event_name} - ${research.description}`}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                                <Typography variant="subtitle1" component="div" style={{ fontFamily: ['Bruno Ace SC', 'cursive'], color: 'blue' }}>
                                    Sports:
                                </Typography>
                                <List>
                                    {college.sports.map((sport, i) => (
                                        <ListItem key={i}>
                                            <ListItemText primary={`${sport.category}: ${sport.description}`} />
                                        </ListItem>
                                    ))}
                                </List>
                               <Link to={`/class/${college._id}`}><button className="btn btn-active btn-neutral">Details</button></Link>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Classes;
