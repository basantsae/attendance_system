// import React, { useState, useEffect } from "react";
// import { CSVLink } from "react-csv";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";

// function Attendances({ data }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredData, setFilteredData] = useState(data);
//   const [date, setDate] = useState("");
//   const [sortedData, setSortedData] = useState(data);
//   const [rowsToShow, setRowsToShow] = useState(10);
//   const [showDropdown, setShowDropdown] = useState(false);

//   useEffect(() => {
//     const lowerCaseTerm = searchTerm.toLowerCase();
//     const newFilteredData = sortedData.filter((item) => {
//       const itemDate = new Date(item.date);
//       const selectedDate = date ? new Date(date) : null;
//       const matchesDate = !selectedDate || itemDate.toDateString() === selectedDate.toDateString();
//       const matchesSearchTerm = Object.values(item).some((value) =>
//         String(value).toLowerCase().includes(lowerCaseTerm)
//       );
//       return matchesDate && matchesSearchTerm;
//     });
//     setFilteredData(newFilteredData);
//   }, [searchTerm, date, sortedData]);

//   const handleReload = () => {
//     setSearchTerm("");
//     setDate("");
//     setRowsToShow(10);
//     setFilteredData(data);
//     setSortedData(data);
//   };

//   const handlePrint = () => {
//     window.print();
//   };

//   const handlePdfDownload = () => {
//     const input = document.getElementById("table-section");
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "PNG", 0, 0);
//       pdf.save("data.pdf");
//     });
//   };

//   const handleExcelDownload = () => {
//     alert("Excel download logic not implemented");
//     // You can implement your Excel download logic here using a suitable library
//   };

//   const convertDataToArray = (data) => {
//     if (Array.isArray(data) && data.length > 0 && typeof data[0] === "object") {
//       const headers = Object.keys(data[0]);
//       const rows = data.map((row) => headers.map((header) => row[header]));
//       return [headers, ...rows];
//     }
//     return data;
//   };

//   const csvData = convertDataToArray(filteredData);

//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   const handleRowsToShow = (numRows) => {
//     setRowsToShow(numRows);
//     setShowDropdown(false);
//   };

//   return (
//     <>
//       <div className="content p-4">
//         <div className="content-header">
//           <h1>Attendances</h1>
//         </div>

//         <div className="attendance-content">
//           <div className="attendance-title">
//             <h1>List</h1>
//           </div>
//           <hr />

//           <div className="date-range-picker">
//             <div>
//               <label htmlFor="date">Date:</label>
//               <input
//                 type="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 style={{ border: "1px solid #ccc", borderRadius: "5px" }}
//               />
//             </div>
//           </div>

//           <hr />

//           <div className="attendance-file">
//             <div id="download-section">
//               <button onClick={handleReload}>Reload</button>
//               <div style={{ marginLeft: "10px", position: "relative" }}>
//                 <button
//                   style={{ backgroundColor: "#fff", color: "#000" }}
//                   onClick={toggleDropdown}
//                 >{`Show ${rowsToShow} rows`}</button>
//                 {showDropdown && (
//                   <ul
//                     style={{
//                       position: "absolute",
//                       top: "100%",
//                       left: "10px",
//                       backgroundColor: "white",
//                       border: "1px solid #ccc",
//                       padding: "10px",
//                       listStyle: "none",
//                       cursor: "pointer",
//                     }}
//                   >
//                     <li onClick={() => handleRowsToShow(10)}>Show 10 rows</li>
//                     <li onClick={() => handleRowsToShow(20)}>Show 20 rows</li>
//                     <li onClick={() => handleRowsToShow(filteredData.length)}>
//                       Show all rows
//                     </li>
//                   </ul>
//                 )}
//               </div>
//               <div style={{ display: "flex" }}>
//                 <CSVLink data={csvData} filename={"data.csv"}>
//                   <button>CSV</button>
//                 </CSVLink>
//                 <button onClick={handlePdfDownload}>PDF</button>
//                 <button onClick={handlePrint}>Print</button>
//                 <button onClick={handleExcelDownload}>Excel</button>
//               </div>
//             </div>
//             <input
//               type="text"
//               placeholder="Search..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{
//                 padding: "10px",
//                 width: "200px",
//                 border: "1px solid #ccc",
//                 borderRadius: "5px",
//               }}
//             />
//           </div>

//           <hr />

//           <div className="attendance-table">
//             <table border="1" style={{ width: "100%", marginTop: "20px" }}>
//               <thead>
//                 <tr>
//                   <th>No.</th>
//                   <th>Name</th>
//                   <th>Date</th>
//                   <th>In Time</th>
//                   <th>Out Time</th>
//                   <th>Work Hour</th>
//                   <th>Over Time</th>
//                   <th>Late Time</th>
//                   <th>Location</th>
//                   <th>Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {filteredData.length === 0 ? (
//                   <tr>
//                     <td colSpan="10" style={{ textAlign: "center" }}>
//                       No data available in table
//                     </td>
//                   </tr>
//                 ) : (
//                   filteredData.slice(0, rowsToShow).map((item, index) => (
//                     <tr key={index}>
//                       <td>{index + 1}</td>
//                       <td>{item.name}</td>
//                       <td>{item.date}</td>
//                       <td>{item.inTime}</td>
//                       <td>{item.outTime}</td>
//                       <td>{item.workHour}</td>
//                       <td>{item.overTime}</td>
//                       <td>{item.lateTime}</td>
//                       <td>{item.location}</td>
//                       <td>{item.status}</td>
//                     </tr>
//                   ))
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Attendances;


import React, { useState, useEffect } from 'react';
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function Attendances({ data }) {
  const [searchDate, setSearchDate] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [rowsToShow, setRowsToShow] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const newFilteredData = data.filter(item => {
      const matchesDate = searchDate ? item.date === searchDate : true;
      const matchesStatus = statusFilter ? item.status === statusFilter : true;
      return matchesDate && matchesStatus;
    });
    setFilteredData(newFilteredData);
  }, [searchDate, statusFilter, data]);

  const handleReload = () => {
    setSearchDate('');
    setStatusFilter('');
    setRowsToShow(10);
    setFilteredData(data);
  };

  const handlePrint = () => {
    window.print();
  };

  const handlePdfDownload = () => {
    const input = document.getElementById('table-section');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('data.pdf');
    });
  };

  const convertDataToArray = (data) => {
    if (Array.isArray(data) && data.length > 0 && typeof data[0] === 'object') {
      const headers = Object.keys(data[0]);
      const rows = data.map(row => headers.map(header => row[header]));
      return [headers, ...rows];
    }
    return data;
  };

  const csvData = convertDataToArray(filteredData);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRowsToShow = (numRows) => {
    setRowsToShow(numRows);
    setShowDropdown(false);
  };

  return (
    <>
      <div className="content p-4">
        <div className="content-header">
          <h1>Attendances</h1>
        </div>

        <div className="attendance-content">
          <div className="attendance-title">
            <h1>List</h1>
          </div>
          <hr />

          <div className="filters">
            <div>
              <label htmlFor="searchDate">Date:</label>
              <input
                type="date"
                value={searchDate}
                onChange={(e) => setSearchDate(e.target.value)}
                style={{ border: '1px solid #ccc', borderRadius: '5px' }}
              />
            </div>
            <div>
              <label htmlFor="statusFilter">Status:</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                style={{ border: '1px solid #ccc', borderRadius: '5px' }}
              >
                <option value="">All</option>
                <option value="Presence">Presence</option>
                <option value="Absence">Absence</option>
                <option value="Delay">Delay</option>
                <option value="Permission">Permission</option>
              </select>
            </div>
          </div>

          <hr />

          <div className="attendance-file">
            <div id="download-section">
              <button onClick={handleReload}>Reload</button>
              <div style={{ marginLeft: '10px', position: 'relative' }}>
                <button style={{ backgroundColor: '#fff', color: "#000" }} onClick={toggleDropdown}>{`Show ${rowsToShow} rows`}</button>
                {showDropdown && (
                  <ul style={{ position: 'absolute', top: '100%', left: "10px", backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', listStyle: 'none', cursor: "pointer" }}>
                    <li onClick={() => handleRowsToShow(10)}>Show 10 rows</li>
                    <li onClick={() => handleRowsToShow(20)}>Show 20 rows</li>
                    <li onClick={() => handleRowsToShow(filteredData.length)}>Show all rows</li>
                  </ul>
                )}
              </div>
              <div style={{ display: 'flex' }}>
                <CSVLink data={csvData} filename={"data.csv"}>
                  <button>CSV</button>
                </CSVLink>
                <button onClick={handlePdfDownload}>PDF</button>
                <button onClick={handlePrint}>Print</button>
              </div>
            </div>
          </div>

          <hr />

          <div className="attendance-table">
            <table border="1" style={{ width: '100%', marginTop: '20px' }}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Date</th>
                  <th>In Time</th>
                  <th>Out Time</th>
                  <th>Work Hour</th>
                  <th>Over Time</th>
                  <th>Late Time</th>
                  <th>Location</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.length === 0 ? (
                  <tr>
                    <td colSpan="10" style={{ textAlign: 'center' }}>No data available in table</td>
                  </tr>
                ) : (
                  filteredData.slice(0, rowsToShow).map((item, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.date}</td>
                      <td>{item.inTime}</td>
                      <td>{item.outTime}</td>
                      <td>{item.workHour}</td>
                      <td>{item.overTime}</td>
                      <td>{item.lateTime}</td>
                      <td>{item.location}</td>
                      <td>{item.status}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendances;

