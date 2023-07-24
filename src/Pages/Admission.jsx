import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import SectionTitle from '../Components/SectionTitle';

const Admission = () => {
    const { user } = useContext(AuthContext);

    const handleAdd = async (event) => {
        event.preventDefault();
        const form = event.target;
        const college = form.college ? form.college.value : '';
        const photo = form.photo ? form.photo.value : '';
        const name = form.name ? form.name.value : '';
        const subject = form.subject ? form.subject.value : '';
        const email = form.email ? form.email.value : '';
        const date = form.date ? form.date.value : '';

        if (!college || !photo || !name || !subject || !email || !date) {
            alert('Please fill in all required fields');
            return;
        }

        const admission = {
            CandidatePhoto: photo,
            CandidateName: name,
            CollegeName: college,
            Subject: subject,
            Email: email,
            DateOfBirth: date
        };

        try {
            const response = await fetch('https://admission-server-rouge.vercel.app/admission', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(admission)
            });

            const data = await response.json();
            if (data.insertedId) {
                alert('Candidate added successfully');
            } else {
                alert('Failed to add candidate');
            }
        } catch (error) {
            console.error('Error adding candidate:', error);
        }
    };

    return (
        <div className='mt-10 mb-10'>
            <SectionTitle title={"Admission Form"} />
            <form onSubmit={handleAdd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL of Candidate</span>
                        </label>
                        <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Candidate Name</span>
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
                            <span className="label-text">Subject</span>
                        </label>
                        <input type="text" name="subject" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Candidate email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" />
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
            <div className="card-body"></div>
        </div>
    );
};

export default Admission;
