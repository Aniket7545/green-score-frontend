import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const EnterpriseScore = () => {
  const [files, setFiles] = useState({
    energyEfficiency: null,
    wasteReduction: null,
    sustainableSourcing: null,
    carbonFootprint: null,
  });
  const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
  const [greenScore, setGreenScore] = useState(null);

  const handleFileChange = (e) => {
    setFiles({
      ...files,
      [e.target.name]: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !files.energyEfficiency ||
      !files.wasteReduction ||
      !files.sustainableSourcing ||
      !files.carbonFootprint
    ) {
      alert('Please submit all files to calculate the green score.');
      return;
    }

    setSubmittedSuccessfully(true);
    // Clear the file input fields
    document.getElementById('energyEfficiency').value = '';
    document.getElementById('wasteReduction').value = '';
    document.getElementById('sustainableSourcing').value = '';
    document.getElementById('carbonFootprint').value = '';
    // Generate a random green score (for demonstration purposes)
    const randomScore = Math.floor(Math.random() * 100);
    setGreenScore(randomScore);
  };

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow">
      <h2 className="text-center text-success mb-4">🏢 Enterprise Green Score Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="energyEfficiency" className="form-label">Energy Efficiency</label>
          <input type="file" className="form-control" id="energyEfficiency" name="energyEfficiency" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="wasteReduction" className="form-label">Waste Reduction</label>
          <input type="file" className="form-control" id="wasteReduction" name="wasteReduction" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="sustainableSourcing" className="form-label">Sustainable Sourcing</label>
          <input type="file" className="form-control" id="sustainableSourcing" name="sustainableSourcing" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="carbonFootprint" className="form-label">Carbon Footprint</label>
          <input type="file" className="form-control" id="carbonFootprint" name="carbonFootprint" onChange={handleFileChange} />
        </div>
        <button type="submit" className="btn btn-success mt-3">Submit</button>
      </form>
      {submittedSuccessfully && (
        <>
          <p className="mt-3 text-success">Files submitted successfully.</p>
          {greenScore !== null && <p>Your green score is: {greenScore}</p>}
        </>
      )}
    </div>
  );
}

export default EnterpriseScore;
