import React from 'react';

const TestCaseList = ({ testCases, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Test Cases</h2>
            <ul>
                {testCases.map((testCase) => (
                    <li key={testCase.id}>
                        <span>{testCase.title}</span>
                        <button onClick={() => onEdit(testCase)}>Edit</button>
                        <button onClick={() => onDelete(testCase.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TestCaseList;