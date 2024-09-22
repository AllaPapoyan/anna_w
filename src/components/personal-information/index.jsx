import React, { useState } from 'react';
import './style.scss';

const PersonalInformation = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipCode: '',
        phone: '',
        email: '',
        position: '',
        authorizedToWork: '', // 'yes' or 'no'
        felonyConviction: '',  // 'yes' or 'no'
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    // Handle form input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError(null); // Reset error when user starts typing
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Simple validation (you can enhance this)
        if (!formData.firstName || !formData.lastName || !formData.address1 || !formData.city ||
            !formData.state || !formData.zipCode || !formData.phone || !formData.email ||
            !formData.position || !formData.authorizedToWork || !formData.felonyConviction) {
            setError('All required fields must be filled out');
            return;
        }

        // Here, you can add logic to submit the form data to your server or API

        setSuccess(true);
    };

    return (
        <div className="G-container G-flex  personal-info-page">
            <h2 className="title">Personal Information</h2>
            <div className="container">


                <form className="personal-info-form" onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            placeholder="Enter your first name"
                            required
                        />
                        </div>

                        {/* Last Name */}
                        <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            placeholder="Enter your last name"
                            required
                        />
                    </div>

                    {/* Address 1 */}
                    <div className="form-group">
                        <label htmlFor="address1">Address 1 *</label>
                        <input
                            type="text"
                            id="address1"
                            name="address1"
                            value={formData.address1}
                            onChange={handleInputChange}
                            placeholder="Enter your address"
                            required
                        />
                        </div>

                        {/* Address 2 (optional) */}
                        <div className="form-group">
                        <label htmlFor="address2">Address 2</label>
                        <input
                            type="text"
                            id="address2"
                            name="address2"
                            value={formData.address2}
                            onChange={handleInputChange}
                            placeholder="Apartment, suite, etc."
                        />
                    </div>

                    {/* City */}
                    <div className="form-group">
                        <label htmlFor="city">City *</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="Enter your city"
                            required
                        />
                        </div>

                        {/* State */}
                        <div className="form-group">
                        <label htmlFor="state">State *</label>
                        <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleInputChange}
                            placeholder="Enter your state"
                            required
                        />
                    </div>

                    {/* Zip Code */}
                    <div className="form-group">
                        <label htmlFor="zipCode">Zip Code *</label>
                        <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            placeholder="Enter your zip code"
                            required
                        />
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                        <label htmlFor="phone">Phone Number *</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email address"
                            required
                        />
                        </div>

                        {/* Position Applying For */}
                        <div className="form-group">
                        <label htmlFor="position">Position Applying For *</label>
                        <input
                            type="text"
                            id="position"
                            name="position"
                            value={formData.position}
                            onChange={handleInputChange}
                            placeholder="Enter the position you're applying for"
                            required
                        />
                    </div>

                    {/* Legally Authorized to Work */}
                    <div className="form-group-radio">
                        <label>Are you legally authorized to work in the United States? *</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="authorizedToWork"
                                    value="yes"
                                    checked={formData.authorizedToWork === 'yes'}
                                    onChange={handleInputChange}
                                    required
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="authorizedToWork"
                                    value="no"
                                    checked={formData.authorizedToWork === 'no'}
                                    onChange={handleInputChange}
                                />
                                No
                            </label>
                        </div>
                        </div>

                        {/* Convicted of a Felony */}
                        <div className="form-group-radio">
                        <label>Have you ever been convicted of a felony? *</label>
                        <div>
                            <label>
                                <input
                                    type="radio"
                                    name="felonyConviction"
                                    value="yes"
                                    checked={formData.felonyConviction === 'yes'}
                                    onChange={handleInputChange}
                                    required
                                />
                                Yes
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="felonyConviction"
                                    value="no"
                                    checked={formData.felonyConviction === 'no'}
                                    onChange={handleInputChange}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Error and Success Messages */}
                    {error && <p className="error-message">{error}</p>}
                    {success && <p className="success-message">Your information has been submitted successfully!</p>}


                </form>
            </div>
        </div>
    );
};

export default PersonalInformation;

