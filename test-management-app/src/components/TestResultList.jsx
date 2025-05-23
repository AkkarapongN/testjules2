import React from 'react';

const TestResultList = ({ results }) => {
    if (!results || results.length === 0) {
        return <p>No test results available for this test case.</p>;
    }

    return (
        <div>
            <h3>Test Results:</h3>
            <ul>
                {results.map((result) => (
                    <li key={result.id} style={{ borderBottom: '1px solid #eee', marginBottom: '10px', paddingBottom: '10px' }}>
                        <p><strong>Status:</strong> {result.status}</p>
                        <p><strong>Date:</strong> {new Date(result.datetime).toLocaleString()}</p>
                        <p><strong>Tester:</strong> {result.tester}</p>
                        <p><strong>Result Details:</strong> {result.result}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestResultList;
