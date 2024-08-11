
// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const EnterpriseScore = () => {
//   const [files, setFiles] = useState({
//     energyEfficiency: null,
//     wasteReduction: null,
//     sustainableSourcing: null,
//     carbonFootprint: null,
//   });
//   const [greenScore, setGreenScore] = useState(null);
//   const [error, setError] = useState(null);

//   const handleFileChange = (e) => {
//     setFiles({
//       ...files,
//       [e.target.name]: e.target.files[0],
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(null);
//     setGreenScore(null);

//     if (
//       !files.energyEfficiency ||
//       !files.wasteReduction ||
//       !files.sustainableSourcing ||
//       !files.carbonFootprint
//     ) {
//       setError('Please submit all files to calculate the green score.');
//       return;
//     }

//     const formData = new FormData();
//     Object.keys(files).forEach((key) => {
//       formData.append(key, files[key]);
//     });

//     try {
//       const response = await axios.post('http://localhost:3000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setGreenScore(response.data.greenScore);
//       // Clear the file input fields
//       setFiles({
//         energyEfficiency: null,
//         wasteReduction: null,
//         sustainableSourcing: null,
//         carbonFootprint: null,
//       });
//       // Clear the file input elements
//       Object.keys(files).forEach((key) => {
//         if (document.getElementById(key)) {
//           document.getElementById(key).value = '';
//         }
//       });
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred while uploading files.');
//     }
//   };

//   return (
//     <div className="container mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-center text-success mb-4">🏢 Enterprise Green Score Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         {['energyEfficiency', 'wasteReduction', 'sustainableSourcing', 'carbonFootprint'].map((field) => (
//           <div className="form-group mb-4" key={field}>
//             <label htmlFor={field} className="form-label">
//               {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
//             </label>
//             <input
//               type="file"
//               className="form-control"
//               id={field}
//               name={field}
//               onChange={handleFileChange}
//               accept=".pdf,.csv,.xlsx"
//             />
//           </div>
//         ))}
//         <button type="submit" className="btn btn-success mt-3">
//           Submit
//         </button>
//       </form>
//       {error && <p className="mt-3 text-danger">{error}</p>}
//       {greenScore !== null && (
//         <p className="mt-3 text-success">Your green score is: {greenScore}</p>
//       )}
//     </div>
//   );
// };

// export default EnterpriseScore;

import React from 'react';
import ScoreCalculator from './ScoreCalculator';

const EnterpriseScore = () => (
  <ScoreCalculator
    title="🏢 Enterprise Green Score Calculator"
    fields={['energyEfficiency', 'wasteReduction', 'sustainableSourcing', 'carbonFootprint']}
    scoreType="enterprise"
  />
);

export default EnterpriseScore;