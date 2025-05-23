import React from 'react';

// Added onViewResults and onAddResult to props
const TestCaseList = ({ testCases, onEdit, onDelete, onViewResults, onAddResult }) => {
    return (
        <div>
            <h2>Test Cases</h2>
            <ul>
                {testCases.map((testCase) => (
                    <li key={testCase.id} style={{ marginBottom: '10px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        {/* Changed testCase.title to testCase.scenario */}
                        <h3>{testCase.scenario}</h3>
                        <p>Steps: {testCase.steps}</p>
                        <button onClick={() => onEdit(testCase)}>Edit Case</button>
                        <button onClick={() => onDelete(testCase.id)}>Delete Case</button>
                        {/* Button to trigger showing TestResultForm */}
                        <button onClick={() => onAddResult(testCase)}>Add Result</button>
                        {/* Button to trigger showing TestResultList */}
                        <button onClick={() => onViewResults(testCase.id)}>View Results</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestCaseList;