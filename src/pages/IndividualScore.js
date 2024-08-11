
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const IndividualScore = () => {
//   const [files, setFiles] = useState({
//     publicTransport: null,
//     energyConsumption: null,
//     wasteManagement: null,
//     sustainableProducts: null,
//     carbonOffsets: null,
//   });
//   const [submittedSuccessfully, setSubmittedSuccessfully] = useState(false);
//   const [greenScore, setGreenScore] = useState(null);

//   const handleFileChange = (e) => {
//     setFiles({
//       ...files,
//       [e.target.name]: e.target.files[0],
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (
//       !files.publicTransport ||
//       !files.energyConsumption ||
//       !files.wasteManagement ||
//       !files.sustainableProducts ||
//       !files.carbonOffsets
//     ) {
//       alert('Please submit all files to calculate the green score.');
//       return;
//     }

//     setSubmittedSuccessfully(true);
//     // Clear the file input fields
//     document.getElementById('publicTransport').value = '';
//     document.getElementById('energyConsumption').value = '';
//     document.getElementById('wasteManagement').value = '';
//     document.getElementById('sustainableProducts').value = '';
//     document.getElementById('carbonOffsets').value = '';
//     // Generate a random green score (for demonstration purposes)
//     const randomScore = Math.floor(Math.random() * 100);
//     setGreenScore(randomScore);
//   };

//   return (
//     <div className="container mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-center text-success mb-4">🌿 Individual Green Score Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="publicTransport" className="form-label">Public Transport</label>
//           <input type="file" className="form-control" id="publicTransport" name="publicTransport" onChange={handleFileChange} />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="energyConsumption" className="form-label">Energy Consumption</label>
//           <input type="file" className="form-control" id="energyConsumption" name="energyConsumption" onChange={handleFileChange} />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="wasteManagement" className="form-label">Waste Management</label>
//           <input type="file" className="form-control" id="wasteManagement" name="wasteManagement" onChange={handleFileChange} />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="sustainableProducts" className="form-label">Sustainable Products</label>
//           <input type="file" className="form-control" id="sustainableProducts" name="sustainableProducts" onChange={handleFileChange} />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="carbonOffsets" className="form-label">Carbon Offsets</label>
//           <input type="file" className="form-control" id="carbonOffsets" name="carbonOffsets" onChange={handleFileChange} />
//         </div>

//         <button type="submit" className="btn btn-success mt-3">Submit</button>
//       </form>
//       {submittedSuccessfully && (
//         <>
//           <p className="mt-3 text-success">Files submitted successfully.</p>
//           {greenScore !== null && <p>Your green score is: {greenScore}</p>}
//         </>
//       )}
//     </div>
//   );
// };

//export default IndividualScore;

import React from 'react';
import ScoreCalculator from './ScoreCalculator';

const IndividualScore = () => (
  <ScoreCalculator
    title="🍃 Individual Green Score Calculator"
    fields={['electricity', 'water', 'naturalGas']}
    scoreType="individual"
  />
);

export default IndividualScore;