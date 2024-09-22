import React from 'react';
import './style.scss';

const ReferencesForm = () => {
    const references = [1, 2, 3]; // Array to map over for references

    return (
        <div className=" G-container references-section">
            <h2>References</h2>
            {references.map((reference) => (
                <div className="reference" key={reference}>
                    <h3>Reference {reference}</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Enter reference name" />
                    </div>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" placeholder="Enter title" />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="Enter phone number" />
                    </div>
                </div>
            ))}

            <div className="additional-skills">
                <h2>Additional Skills</h2>
                <textarea placeholder="List any additional skills..." rows="4" />
            </div>

            <div className="resume-upload">
                <label>Please submit a copy of your resume:</label>
                <input type="file" accept=".pdf,.doc,.docx" />
                <span>File not selected</span>
            </div>
        </div>
    );
};

export default ReferencesForm;
