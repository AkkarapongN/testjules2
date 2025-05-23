import React, { useState } from 'react';

const TestResultForm = ({ testCaseId, onSubmit }) => {
    const [result, setResult] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ testCaseId, result, status });
        setResult('');
        setStatus('');
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
            <button type="submit">Submit Test Result</button>
        </form>
    );
};

export default TestResultForm;