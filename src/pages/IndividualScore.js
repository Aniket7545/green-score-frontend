// import React,{useState} from 'react';
// import './Score.css';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const IndividualScore = () => {
//   const [files, setFiles] = useState({
//     publicTransport: null,
//     energyConsumption: null,
//     wasteManagement: null,
//     sustainableProducts: null,
//     carbonOffsets: null
// });
// const [greenScore, setGreenScore] = useState(null);

// const handleFileChange = (e) => {
//   setFiles({
//       ...files,
//       [e.target.name]: e.target.files[0]
//   });
// };
// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const formData = new FormData();
//   formData.append('publicTransport', files.publicTransport);
//   formData.append('energyConsumption', files.energyConsumption);
//   formData.append('wasteManagement', files.wasteManagement);
//   formData.append('sustainableProducts', files.sustainableProducts);
//   formData.append('carbonOffsets', files.carbonOffsets);
  
//   try {
//     const response = await axios.post('http://localhost:5000/upload', formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     });
//     setGreenScore(response.data.totalGreenScore);
// } catch (error) {
//     console.error('Error uploading files', error);
// }
// };
  

//   return (
//     <div className="container mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-center text-success mb-4">🌿 Individual Green Score Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mb-4">
//           <label htmlFor="public-transport" className="form-label">Public Transport</label>
//           <input type="file" className="form-control" id="public-transport" name="publicTransport" onChange={handleFileChange}  />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="energy-consumption" className="form-label">Energy Consumption</label>
//           <input type="file" className="form-control" id="energy-consumption" name="energyConsumption" onChange={handleFileChange}  />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="waste-management" className="form-label">Waste Management</label>
//           <input type="file" className="form-control" id="waste-management" name="wasteManagement" onChange={handleFileChange}  />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="sustainable-products" className="form-label">Sustainable Products</label>
//           <input type="file" className="form-control" id="sustainable-products" name="sustainableProducts" onChange={handleFileChange}  />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="carbon-offsets" className="form-label">Carbon Offsets</label>
//           <input type="file" className="form-control" id="carbon-offsets" name="carbonOffsets" onChange={handleFileChange}  />
//         </div>
//         <div className="text-center mt-4">
//           <h3 className="text-success">Total Green Score: {greenScore ? greenScore : "0.00"}</h3>
//         </div>
//       <div className="text-center">
//       <button type="submit" className="btn btn-success  mt-3 ">Calculate Green Score</button>
//       </div>
//             </form>
//             {greenScore !== null && (
//                 <div className="alert alert-success text-center">
//                     <h4>Total Green Score: {greenScore}</h4>
//                 </div>
//             )}
//     </div>
//   );
  
// }

//export default IndividualScore;

// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const IndividualScore = () => {
//   const [files, setFiles] = useState({});
//   const [message, setMessage] = useState('');

//   const handleFileChange = (e) => {
//     setFiles(prevState => ({
//       ...prevState,
//       [e.target.name]: e.target.files[0]
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     Object.entries(files).forEach(([key, value]) => {
//       if (value) {
//         formData.append(key, value);
//       }
//     });

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });
//       setMessage(response.data.message || 'Files uploaded successfully.');
//     } catch (error) {
//       console.error('Error uploading files', error);
//       setMessage('Failed to upload files. Please try again.');
//     }
//   };

//   return (
//     <div className="container mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-center text-success mb-4">🌿 Individual Green Score Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-3">
//           <label htmlFor="publicTransport" className="form-label">Public Transport</label>
//           <input type="file" className="form-control" id="publicTransport" name="publicTransport" onChange={handleFileChange} />
//         </div>
//         {/* Repeat similar div blocks for other fields */}

//         <button type="submit" className="btn btn-success mt-3">Calculate Green Score</button>
//       </form>
//       {message && <p className="mt-3">{message}</p>}
//     </div>
//   );
// };

// export default IndividualScore;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const IndividualScore = () => {
  const [files, setFiles] = useState({
    publicTransport: null,
    energyConsumption: null,
    wasteManagement: null,
    sustainableProducts: null,
    carbonOffsets: null,
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
      !files.publicTransport ||
      !files.energyConsumption ||
      !files.wasteManagement ||
      !files.sustainableProducts ||
      !files.carbonOffsets
    ) {
      alert('Please submit all files to calculate the green score.');
      return;
    }

    setSubmittedSuccessfully(true);
    // Clear the file input fields
    document.getElementById('publicTransport').value = '';
    document.getElementById('energyConsumption').value = '';
    document.getElementById('wasteManagement').value = '';
    document.getElementById('sustainableProducts').value = '';
    document.getElementById('carbonOffsets').value = '';
    // Generate a random green score (for demonstration purposes)
    const randomScore = Math.floor(Math.random() * 100);
    setGreenScore(randomScore);
  };

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow">
      <h2 className="text-center text-success mb-4">🌿 Individual Green Score Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="publicTransport" className="form-label">Public Transport</label>
          <input type="file" className="form-control" id="publicTransport" name="publicTransport" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="energyConsumption" className="form-label">Energy Consumption</label>
          <input type="file" className="form-control" id="energyConsumption" name="energyConsumption" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="wasteManagement" className="form-label">Waste Management</label>
          <input type="file" className="form-control" id="wasteManagement" name="wasteManagement" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="sustainableProducts" className="form-label">Sustainable Products</label>
          <input type="file" className="form-control" id="sustainableProducts" name="sustainableProducts" onChange={handleFileChange} />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="carbonOffsets" className="form-label">Carbon Offsets</label>
          <input type="file" className="form-control" id="carbonOffsets" name="carbonOffsets" onChange={handleFileChange} />
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
};

export default IndividualScore;
