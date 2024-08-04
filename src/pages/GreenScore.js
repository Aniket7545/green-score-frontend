import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../context/AuthContext';

const GreenScore = () => {
    const [formData, setFormData] = useState({
        energyConsumption: '',
        transportationHabits: '',
        wasteManagement: ''
    });

    const { user } = useContext(AuthContext);

    const { energyConsumption, transportationHabits, wasteManagement } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        const res = await axios.post('/api/greenscore/submit', formData, {
            headers: {
                Authorization: `Bearer ${localStorage.token}`
            }
        });
        console.log(res.data);
    };

    if (!user) {
        return <div>Please log in to submit your green score data.</div>;
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="number" name="energyConsumption" value={energyConsumption} onChange={onChange} placeholder="Energy Consumption" required />
            <select name="transportationHabits" value={transportationHabits} onChange={onChange} required>
                <option value="">Select Transportation</option>
                <option value="public">Public Transport</option>
                <option value="private">Private Transport</option>
                <option value="bicycle">Bicycle</option>
                <option value="walk">Walking</option>
            </select>
            <input type="number" name="wasteManagement" value={wasteManagement} onChange={onChange} placeholder="Waste Management" required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default GreenScore;
