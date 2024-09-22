import React, { useState } from 'react';
import './style.scss';

const FormComponent = () => {
    const [formData, setFormData] = useState({
        references: [{ name: '', title: '', email: '', phone: '' }, { name: '', title: '', email: '', phone: '' }, { name: '', title: '', email: '', phone: '' }],
        additionalSkills: '',
        resume: null,
    });

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        if (name === 'additionalSkills') {
            setFormData({ ...formData, additionalSkills: value });
        } else if (name.startsWith('reference')) {
            const updatedReferences = [...formData.references];
            updatedReferences[index][name] = value;
            setFormData({ ...formData, references: updatedReferences });
        }
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, resume: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Add your form submission logic here (e.g., send data to an API)
    };

    return (
        <form onSubmit={handleSubmit} className=" G-container form-component">
            {/* References and Additional Skills sections go here */}
            <div className="submit-button">
                <button type="submit">Submit Application</button>
            </div>
        </form>
    );
};

export default FormComponent;
