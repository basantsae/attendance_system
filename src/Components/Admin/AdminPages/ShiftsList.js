// import React from "react";

// function ShiftsList(){
//     return(
//         <>
//         <div className="content p-4">
//             <div className="content-header">
//                 <h1>Areas</h1>
//             </div>
//             <div className="attendance-content">
//                 <div className="attendance-title">
//                     <h1>
//                         List
//                     </h1>
//                 </div>
//                 <hr/>

//                 <div className="date-range-picker">
//                     <div>
//                         <label htmlFor="fromDate">From Date:</label>
//                         <input 
//                         type="date" 
//                         value={startDate} 
//                         onChange={(e) => setStartDate(e.target.value)} 
//                         style={{border: '1px solid #ccc', borderRadius: '5px' }}
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="toDate">To Date:</label>
//                         <input 
//                         type="date" 
//                         value={endDate} 
//                         onChange={(e) => setEndDate(e.target.value)} 
//                         style={{border: '1px solid #ccc', borderRadius: '5px' }}
//                     />
//                     </div>
//                 </div>

//                 <hr/>

//                 <div className="attendance-file">
//                         <div id="download-section">
//                                 <button onClick={handleReload}>Reload</button>
//                                 <div style={{ marginLeft: '10px', position: 'relative' }}>
//                                 <button style={{ backgroundColor: '#fff',color:"#000"}} onClick={toggleDropdown}>{`Show ${rowsToShow} rows`}</button>
//                                 {showDropdown && (
//                                     <ul style={{ position: 'absolute', top: '100%', left:"10px", backgroundColor: 'white', border: '1px solid #ccc', padding: '10px', listStyle: 'none',cursor:"pointer" }}>
//                                     <li onClick={() => handleRowsToShow(10)}>Show 10 rows</li>
//                                     <li onClick={() => handleRowsToShow(20)}>Show 20 rows</li>
//                                     <li onClick={() => handleRowsToShow(filteredData.length)}>Show all rows</li>
//                                     </ul>
//                                 )}
//                                 </div>
//                                 <div style={{ display: 'flex'}}>
//                                     <CSVLink data={csvData} filename={"data.csv"}>
//                                     <button>CSV</button>
//                                     </CSVLink>
//                                     <button onClick={handlePdfDownload}>PDF</button>
//                                     <button onClick={handlePrint}>Print</button>
//                                     <button onClick={handleExcelDownload}>Excel</button>
//                                 </div>
//                         </div>
//                             <input 
//                             type="text" 
//                             placeholder="Search..." 
//                             value={searchTerm} 
//                             onChange={(e) => setSearchTerm(e.target.value)} 
//                             style={{ padding: '10px', width: '200px', border: '1px solid #ccc', borderRadius: '5px' }}
//                             />
//                 </div>
//                 <hr/>

//                 <div className="attendance-table">
//                     <table border="1" style={{ width: '100%', marginTop: '20px' }}>
//                         <thead>
//                         <tr>
//                             <th>No.</th>
//                             <th>Name</th>
//                             <th>Address</th>
//                             <th>Created At</th>
//                             <th>Updated At</th>
//                             <th>Action</th>
//                         </tr>
//                         </thead>
//                         <tbody>
//                         {filteredData.length === 0 ? (
//                             <tr>
//                             <td colSpan="12" style={{ textAlign: 'center' }}>No data available in table</td>
//                             </tr>
//                         ) : (
//                             filteredData.slice(0, rowsToShow).map((item, index) => (
//                             <tr key={index}>
//                                 <td>{index + 1}</td>
//                                 <td>{item.name}</td>
//                                 <td>{item.address}</td>
//                                 <td>{item.created}</td>
//                                 <td>{item.updated}</td>
//                                 <td>{item.action}</td>
//                             </tr>
//                             ))
//                         )}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             </div>
//         </>
//     )
// }

// export default ShiftsList;