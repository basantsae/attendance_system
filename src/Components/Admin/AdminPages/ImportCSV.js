import React, { useState } from "react";

function ImportCSV() {
  const [file, setFile] = useState(null);
  const [showImage, setShowImage] = useState(false);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "path/to/your/template.csv";
    link.download = "template.csv";
    link.click();
  };

  const handleShowImage = () => {
    setShowImage(true);
  };
  return (
    <>
        <div className="content p-4">
            <div className="content-header">
            <h1>Import Data</h1>
            </div>

            <div className="attendance-content">
            <div className="attendance-title">
                <h1>Import</h1>
            </div>
            <hr />

            <div className="profile-container">
                <form className="user-form">
                <div className="actions">
                    <div className="user">
                    <label className="labelcsv">Import Data</label>
                    <input
                        className="control-form"
                        type="file"
                        accept=".csv"
                        onChange={handleFileUpload}
                        style={{padding:0,height:"32px"}}
                        size={60}
                    />
                    </div>
                    <div className="user">
                    <label className="labelcsv">Download Template</label>
                    <button className="download-btn btn" onClick={handleDownload}>
                        Download Template
                    </button>
                    </div>
                    <div className="user">
                    <label className="labelcsv">Instructions</label>
                    <button className="instru-btn" onClick={handleShowImage}>
                        Show Instructions
                    </button>
                    </div>
                </div>

                {showImage && (
                    <div className="image-container">
                    <img src="path/to/your/image.jpg" alt="Example" />
                    </div>
                )}

                <div className="div-btn">
                    <button className="update-btn" type="submit">
                    Import
                    </button>
                </div>
                </form>
                
            </div>
            </div>
        </div>
    </>
  );
}
export default ImportCSV;
// import React, { useState } from 'react';

// function ImportCSV() {
//     const [file, setFile] = useState(null);
//     const [showImage, setShowImage] = useState(false);

//     const handleFileUpload = (event) => {
//         setFile(event.target.files[0]);
//     };

//     const handleDownload = () => {
//         const link = document.createElement('a');
//         link.href = 'path/to/your/template.csv';
//         link.download = 'template.csv';
//         link.click();
//     };

//     const handleShowImage = () => {
//         setShowImage(true);
//     };

//     return (
//         <div className="import-csv-container">
//             <h1>Import CSV</h1>

//             <div className="actions">
//                 <div className="action">
//                     <label>Import Data</label>
//                     <input type="file" accept=".csv" onChange={handleFileUpload} />
//                 </div>
//                 <div className="action">
//                     <label>Download Template</label>
//                     <button onClick={handleDownload}>Download Template</button>
//                 </div>
//                 <div className="action">
//                     <label>Instructions</label>
//                     <button onClick={handleShowImage}>Show Image</button>
//                 </div>
//             </div>

//             {showImage && (
//                 <div className="image-container">
//                     <img src="path/to/your/image.jpg" alt="Example" />
//                 </div>
//             )}
//         </div>
//     );
// }

// export default ImportCSV;
