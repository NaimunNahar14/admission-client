import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const Admission = () => {
    const { user } = useContext(AuthContext);
    const handleAddToy = event => {
        event.preventDefault();
        const form = event.target;
        const college = form.college.value;
        const photo = form.photo.value;
        const name = form.name.value;
        const subject = form.subject.value;
        const email = form.email.value;
        const date = form.date.value;
        
        const admission = {
            CandidatePhoto: photo,
          CandidateName: name,
          CollegeName: college,
            subject,
            email,
            DateOfBirth: date
            
           
        }
        console.log(admission);

        fetch('http://localhost:5000/admission', {
            method: "POST",
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(admission)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Candidate added successfully')
                }
            })



    }
    return (
        <div className='mt-10'>
            <form onSubmit={handleAddToy}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL of Candidate</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text"> Candidate Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={user?.displayName} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">College Name</span>
                        </label>
                        <input type="text" name="college" className="input input-bordered" />
                    </div>
                
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate email</span>
                        </label>
                        <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
                    </div>
                </div>
              
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date of Birth</span>
                    </label>
                    <input type="date" name='date' className="input input-bordered" />
                </div>
               
                
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Submit" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default Admission;