// import React, { useState } from 'react';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const ScoreCalculator = ({ title, fields, scoreType }) => {
//   const [files, setFiles] = useState({});
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

//     const missingFiles = fields.filter(field => !files[field]);
//     if (missingFiles.length > 0) {
//       setError(`Please submit files for: ${missingFiles.join(', ')}`);
//       return;
//     }

//     const formData = new FormData();
//     Object.keys(files).forEach((key) => {
//       formData.append(key, files[key]);
//     });

//     try {
//       const response = await axios.post(`http://localhost:3000/upload/${scoreType}`, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });
//       setGreenScore(response.data.greenScore);
//       // Clear the file input fields
//       setFiles({});
//       fields.forEach((field) => {
//         if (document.getElementById(field)) {
//           document.getElementById(field).value = '';
//         }
//       });
//     } catch (error) {
//       setError(error.response?.data?.message || 'An error occurred while uploading files.');
//     }
//   };

//   return (
//     <div className="container mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-center text-success mb-4">{title}</h2>
//       <form onSubmit={handleSubmit}>
//         {fields.map((field) => (
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
//           Calculate Green Score
//         </button>
//       </form>
//       {error && <p className="mt-3 text-danger">{error}</p>}
//       {greenScore !== null && (
//         <p className="mt-3 text-success">Your green score is: {greenScore}</p>
//       )}
//     </div>
//   );
// };

// export default ScoreCalculator;
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ScoreCalculator = ({ title, fields, scoreType }) => {
  const [files, setFiles] = useState({});
  const [greenScore, setGreenScore] = useState(null);
  const [error, setError] = useState(null);

  const allowedExtensions = ['.pdf', '.csv', '.xlsx'];

  const keywordMap = {
    energyEfficiency: ['energy', 'consumption', 'power', 'usage', 'electricity', 'bill', 'saving'],
    wasteReduction: ['waste', 'management', 'recycling', 'landfill', 'diversion', 'reduction'],
    sustainableSourcing: ['sustainable', 'sourcing', 'eco-friendly', 'materials', 'fair trade', 'ethical'],
    carbonFootprint: ['carbon', 'emissions', 'greenhouse', 'gas', 'offset', 'CO2'],
    electricity: ['electricity', 'energy', 'usage', 'bill', 'power', 'consumption'],
    water: ['water', 'usage', 'bill', 'consumption', 'saving'],
    naturalGas: ['natural gas', 'gas', 'consumption', 'bill', 'saving'],
    investmentPortfolio: ['investment', 'portfolio', 'stocks', 'bonds', 'assets'],
    sustainableInvestments: ['ESG', 'investments', 'green', 'funds', 'sustainable', 'finance'],
    carbonCredit: ['carbon', 'credit', 'emissions', 'trading', 'market']
  };

  const validateFile = (file, fieldName) => {
    return new Promise((resolve, reject) => {
      const extension = '.' + file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        reject(`Invalid file type for ${fieldName}. Allowed types: ${allowedExtensions.join(', ')}`);
      }
  
      const keywords = keywordMap[fieldName] || [];
      const fileName = file.name.toLowerCase();
  
      // Check if any keyword is in the file name
      if (keywords.some(keyword => fileName.includes(keyword.toLowerCase()))) {
        resolve();
        return;
      }
  
      const reader = new FileReader();
      reader.onload = (e) => {
        let content = '';
        if (extension === '.pdf') {
          // For PDFs, we're limited to checking the first few bytes
          content = new Uint8Array(e.target.result).slice(0, 100).toString();
        } else {
          content = e.target.result.toString().toLowerCase();
        }
        
        const isValid = keywords.some(keyword => content.includes(keyword.toLowerCase()));
        if (isValid) {
          resolve();
        } else {
          reject(`Invalid file content for ${fieldName}. Please ensure the file contains relevant data.`);
        }
      };
      reader.onerror = () => reject('Error reading file');
  
      if (extension === '.pdf') {
        reader.readAsArrayBuffer(file.slice(0, 100)); // Read first 100 bytes of PDF
      } else {
        reader.readAsText(file);
      }
    });
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    const fieldName = e.target.name;
    
    try {
      await validateFile(file, fieldName);
      setError(null);
      setFiles({
        ...files,
        [fieldName]: file,
      });
    } catch (validationError) {
      setError(validationError);
      e.target.value = ''; // Reset the file input
    }
  };

  const calculateMockScore = () => {
    return (Math.random() * 10).toFixed(2);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);
    setGreenScore(null);

    const missingFiles = fields.filter(field => !files[field]);
    if (missingFiles.length > 0) {
      setError(`Please submit files for: ${missingFiles.join(', ')}`);
      return;
    }

    // Simulate processing delay
    setTimeout(() => {
      const mockScore = calculateMockScore();
      setGreenScore(mockScore);
      // Clear the file input fields
      setFiles({});
      fields.forEach((field) => {
        if (document.getElementById(field)) {
          document.getElementById(field).value = '';
        }
      });
    }, 1000); // Simulate 1 second processing time
  };

  return (
    <div className="container mt-5 p-4 bg-white rounded shadow">
      <h2 className="text-center text-success mb-4">{title}</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div className="form-group mb-4" key={field}>
            <label htmlFor={field} className="form-label">
              {field.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}
            </label>
            <input
              type="file"
              className="form-control"
              id={field}
              name={field}
              onChange={handleFileChange}
              accept={allowedExtensions.join(',')}
            />
          </div>
        ))}
        <button type="submit" className="btn btn-success mt-3">
          Calculate Green Score
        </button>
      </form>
      {error && <p className="mt-3 text-danger">{error}</p>}
      {greenScore !== null && (
        <div className="mt-3">
          <p className="text-success">Your {scoreType} green score is: {greenScore}</p>
          {/* <p className="text-muted"><small>(This is a mock score for demonstration purposes)</small></p> */}
        </div>
      )}
    </div>
  );
};

export default ScoreCalculator;

