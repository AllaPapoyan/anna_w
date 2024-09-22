import React from 'react';
import './style.scss';

const EmploymentHistoryForm = () => {
    const employers = [1, 2, 3]; // Array to map over for employer fields

    return (
        <div className=" G-container employment-history-section">
            <h2>Employment History</h2>
            {employers.map((employer) => (
                <div className="employer" key={employer}>
                    <h3>Employer {employer}</h3>
                    <div className="form-group">
                        <label>Company Name</label>
                        <input type="text" placeholder="Enter company name" />
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input type="text" placeholder="Enter address" />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" placeholder="Enter phone number" />
                    </div>
                    <div className="form-group">
                        <label>Start Date</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>End Date</label>
                        <input type="date" />
                    </div>
                    <div className="form-group">
                        <label>Position</label>
                        <input type="text" placeholder="Enter position" />
                    </div>
                    <div className="form-group">
                        <label>Salary</label>
                        <input type="text" placeholder="Enter salary" />
                    </div>
                    <div className="form-group">
                        <label>Supervisor/Manager</label>
                        <input type="text" placeholder="Enter supervisor/manager name" />
                    </div>
                    <div className="form-group">
                        <label>Reason for Leaving</label>
                        <input type="text" placeholder="Enter reason for leaving" />
                    </div>
                    <div className="form-group">
                        <label>May we contact?</label>
                        <div className="contact-radio">
                            <label>
                                <input type="radio" name={`contact-${employer}`} value="yes" /> Yes
                            </label>
                            <label>
                                <input type="radio" name={`contact-${employer}`} value="no" /> No
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter phone number" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default EmploymentHistoryForm;

