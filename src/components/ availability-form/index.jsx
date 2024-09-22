import React from 'react';
import './style.scss';

const AvailabilityForm = () => {
    return (
        <div className="G-container G-flex  availability-section">

            <h2>Availability</h2>
            <div className="availability-container">
                 <div className="availability-days">
                <label>Days Available *</label>
                <div className="days-checkbox">
                    {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                        <label key={day}>
                            <input type="checkbox" value={day} />
                            {day}
                        </label>
                    ))}
                </div>
            </div>

                <div className="shift-location-preferences">
                <label>Shift and Location Preferences *</label>
                <div className="locations-radio">
                    {['Los Angeles County', 'Orange County', 'Santa Barbara County', 'San Diego County', 'Ventura County', 'Any'].map(location => (
                        <label key={location}>
                            <input type="radio" name="location" value={location} />
                            {location}
                        </label>
                    ))}
                    <label>
                        <input type="radio" name="location" value="Other" />
                        Other Geographical Locations
                        <input type="text" placeholder="Please specify" />
                    </label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AvailabilityForm;
