import React, { useEffect, useState } from 'react';

const AllPdfReports = () => {
  const [pdfReports, setPdfReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const apiUrl = (process.env.REACT_APP_API_URL || 'http://localhost:5000').trim();
        const response = await fetch(`${apiUrl}/api/get-all-report-pdfs`);
        if (!response.ok) {
          throw new Error('Failed to fetch PDF reports');
        }
        const data = await response.json();
        setPdfReports(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  if (loading) return <div>Loading PDF reports...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>All PDF Reports</h1>
      {pdfReports.length === 0 ? (
        <div>No PDF reports found.</div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {pdfReports.map(report => {
            // Reconstruct a data URL for the PDF. 
            // Assuming `pdf_data` is stored without the "data:application/pdf;base64," prefix.
            const pdfUrl = `data:application/pdf;base64,${report.pdf_data}`;
            return (
              <li key={report.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #ccc', paddingBottom: '1rem' }}>
                <div>
                  <strong>Registration ID:</strong> {report.registration_id}
                </div>
                <div>
                  <strong>Reported At:</strong> {report.reported_at}
                </div>
                <div style={{ marginTop: '0.5rem' }}>
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" download={`report_${report.registration_id}_${report.id}.pdf`}>
                    Download PDF
                  </a>
                </div>
                <div style={{ marginTop: '1rem' }}>
                  <iframe
                    src={pdfUrl}
                    width="600"
                    height="400"
                    title={`PDF Report ${report.id}`}
                    style={{ border: '1px solid #ccc' }}
                  ></iframe>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default AllPdfReports;
