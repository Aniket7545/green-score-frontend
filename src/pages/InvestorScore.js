// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const InvestorScore = () => {
//   const [files, setFiles] = useState({
//     investmentPortfolio: null,
//     sustainableInvestments: null,
//     carbonCredit: null,
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
//       !files.investmentPortfolio ||
//       !files.sustainableInvestments ||
//       !files.carbonCredit
//     ) {
//       alert('Please submit all files to calculate the green score.');
//       return;
//     }

//     setSubmittedSuccessfully(true);
//     // Clear the file input fields
//     document.getElementById('investmentPortfolio').value = '';
//     document.getElementById('sustainableInvestments').value = '';
//     document.getElementById('carbonCredit').value = '';
//     // Generate a random green score (for demonstration purposes)
//     const randomScore = Math.floor(Math.random() * 100);
//     setGreenScore(randomScore);
//   };

//   return (
//     <div className="container mt-5 p-4 bg-white rounded shadow">
//       <h2 className="text-center text-success mb-4">💼 Investor Green Score Calculator</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group mb-4">
//           <label htmlFor="investmentPortfolio" className="form-label">Investment Portfolio</label>
//           <input type="file" className="form-control" id="investmentPortfolio" name="investmentPortfolio" onChange={handleFileChange} />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="sustainableInvestments" className="form-label">Sustainable Investments</label>
//           <input type="file" className="form-control" id="sustainableInvestments" name="sustainableInvestments" onChange={handleFileChange} />
//         </div>
//         <div className="form-group mb-4">
//           <label htmlFor="carbonCredit" className="form-label">Carbon Credit</label>
//           <input type="file" className="form-control" id="carbonCredit" name="carbonCredit" onChange={handleFileChange} />
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
// }

// export default InvestorScore;
import React from 'react';
import ScoreCalculator from './ScoreCalculator';

const InvestorScore = () => (
  <ScoreCalculator
    title="💼 Investor Green Score Calculator"
    fields={['investmentPortfolio', 'sustainableInvestments', 'carbonCredit']}
    scoreType="investor"
  />
);

export default InvestorScore;