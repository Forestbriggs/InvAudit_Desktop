import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import HomePage from './pages/HomePage';
// import AuditPage from './pages/AuditPage';
// import AuditHistory from './pages/AuditHistory';
// import AuditHistoryDetails from './pages/AuditHistoryDetails';
// import AuditDiscrepancies from './pages/AuditDiscrepancies';

const App: React.FC = () => {
    return (
        <Router>
            <div className="min-h-screen">
                <nav className="p-4 bg-base-300">
                    <div className="container mx-auto flex justify-between items-center">
                        <div className="text-2xl font-bold">InvAudit</div>
                        <div className="space-x-4">
                            <Link to="/" className="hover:text-primary">Home</Link>
                            <Link to="/audit" className="">Audit in Progress</Link>
                            <Link to="/history" className="">Audit History</Link>
                        </div>
                    </div>
                </nav>
                <div className="container mx-auto p-4">
                    <Routes>
                        {/* <Route path="/" element={<HomePage />} /> */}
                        <Route path="/" element={<h1>Home</h1>} />
                        {/* <Route path="/audit/:auditId" element={<AuditPage />} />
                        <Route path="/history" element={<AuditHistory />} />
                        <Route path='/audit/:auditId/details' element={<AuditHistoryDetails />} />
                        <Route path='/audit/:auditId/discrepancies' element={<AuditDiscrepancies />} /> */}
                    </Routes>
                </div>
            </div >
        </Router >
    );
};

export default App;