import React, { useState } from 'react';

const TestResultForm = ({ testCaseId, onSubmit }) => {
    const [result, setResult] = useState('');
    const [status, setStatus] = useState('');
    const [datetime, setDatetime] = useState('');
    const [tester, setTester] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ testCaseId, result, status, datetime, tester });
        setResult('');
        setStatus('');
        setDatetime('');
        setTester('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="result">Test Result:</label>
                <input
                    type="text"
                    id="result"
                    value={result}
                    onChange={(e) => setResult(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="">Select Status</option>
                    <option value="Passed">Passed</option>
                    <option value="Failed">Failed</option>
                    <option value="Blocked">Blocked</option>
                </select>
            </div>
            <div>
                <label htmlFor="datetime">Date and Time:</label>
                <input
                    type="datetime-local"
                    id="datetime"
                    value={datetime}
                    onChange={(e) => setDatetime(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="tester">Tester:</label>
                <input
                    type="text"
                    id="tester"
                    value={tester}
                    onChange={(e) => setTester(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Submit Test Result</button>
        </form>
    );
};

export default TestResultForm;