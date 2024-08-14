import React, { useState, useEffect } from "react";
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';

function Analytics({ data, originalData }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(originalData);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [sortedData, setSortedData] = useState(originalData);
  const [rowsToShow, setRowsToShow] = useState(10);
  const [showDropdown, setShowDropdown] = useState(false);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [filtered, setFiltered] = useState(data);
  const [selectedMetrics, setSelectedMetrics] = useState({
    lateTime: true,
    overtime: true,
    earlyCheckOut: true,
  });

  useEffect(() => {
    const lowerCaseTerm = searchTerm.toLowerCase();
    const newFilteredData = sortedData.filter(item => {
      const inDate = new Date(item.inDate);
      const start = startDate ? new Date(startDate) : null;
      const end = endDate ? new Date(endDate) : null;
      const matchesDateRange = (!start || inDate >= start) && (!end || inDate <= end);
      const matchesSearchTerm = Object.values(item).some(value =>
        String(value).toLowerCase().includes(lowerCaseTerm)
      );
      return matchesDateRange && matchesSearchTerm;
    });
    setFilteredData(newFilteredData);
  }, [searchTerm, startDate, endDate, sortedData]);

  const handleReload = () => {
    setSearchTerm('');
    setStartDate('');
    setEndDate('');
    setRowsToShow(10);
    setFilteredData(originalData);
    setSortedData(originalData);
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

  const handleExcelDownload = () => {
    alert('Excel download logic not implemented');
    // You can implement your Excel download logic here using a suitable library
  };

  const convertDataToArray = (originalData) => {
    if (Array.isArray(originalData) && originalData.length > 0 && typeof originalData[0] === 'object') {
      const headers = Object.keys(originalData[0]);
      const rows = originalData.map(row => headers.map(header => row[header]));
      return [headers, ...rows];
    }
    return originalData;
  };

  const csvData = convertDataToArray(filteredData);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleRowsToShow = (numRows) => {
    setRowsToShow(numRows);
    setShowDropdown(false);
  };

  const handleFilter = () => {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const filtered = data.filter(item => {
      const itemDate = new Date(item.inDate);
      return itemDate >= from && itemDate <= to;
    });
    setFiltered(filtered);
    setFilteredData(filtered);
  };

  const handleMetricChange = (metric) => {
    setSelectedMetrics({
      ...selectedMetrics,
      [metric]: !selectedMetrics[metric],
    });
  };

  return (
    <>
      <div className="content p-4">
        <div className="content-header">
          <h1>Analytics</h1>
        </div>

        <div className="attendance-content">
          <div className="attendance-title">
            <h1>Data</h1>
          </div>
          <hr />

          <div className="date-range-picker">
            <div>
              <label>
                From Date:
                <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
              </label>
            </div>
            <div>
              <label>
                To Date:
                <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
              </label>
            </div>
            <button onClick={handleFilter}>Filter</button>
          </div>

          <hr />

         <div className="metric-selector">
            <label style={{color:"rgb(136, 132, 216)"}}>
              <input
                type="checkbox"
                checked={selectedMetrics.lateTime}
                onChange={() => handleMetricChange('lateTime')}
              />
              Late Time
            </label>
            <label style={{color:"rgb(130, 202, 157)"}}>
              <input
                type="checkbox"
                checked={selectedMetrics.overtime}
                onChange={() => handleMetricChange('overtime')}
              />
              Overtime
            </label>
            <label style={{color: "rgb(255, 198, 88)"}}>
              <input
                type="checkbox"
                checked={selectedMetrics.earlyCheckOut}
                onChange={() => handleMetricChange('earlyCheckOut')}
              />
              Early Check-Out
            </label>
          </div>

          <hr />

          <div>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart
                data={filtered}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="inDate" />
                <YAxis />
                <Tooltip />
                <Legend />
                {selectedMetrics.lateTime && <Line type="monotone" dataKey="lateTime" stroke="#8884d8" />}
                {selectedMetrics.overtime && <Line type="monotone" dataKey="overtime" stroke="#82ca9d" />}
                {selectedMetrics.earlyCheckOut && <Line type="monotone" dataKey="earlyCheckOut" stroke="#ffc658" />}
              </LineChart>
            </ResponsiveContainer>
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
                <button onClick={handleExcelDownload}>Excel</button>
              </div>
            </div>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ padding: '10px', width: '200px', border: '1px solid #ccc', borderRadius: '5px' }}
            />
          </div>

          <hr />

          <div className="attendance-table" id="table-section">
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

export default Analytics;


