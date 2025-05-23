import React, { useState } from 'react';
import TestCaseForm from './components/TestCaseForm';
import TestCaseList from './components/TestCaseList';
import TestResultForm from './components/TestResultForm';

const App = () => {
    const [testCases, setTestCases] = useState([]);
    const [selectedTestCase, setSelectedTestCase] = useState(null);

    const addTestCase = (testCase) => {
        setTestCases([...testCases, testCase]);
    };

    const updateTestCase = (updatedTestCase) => {
        setTestCases(testCases.map(tc => (tc.id === updatedTestCase.id ? updatedTestCase : tc)));
    };

    const deleteTestCase = (id) => {
        setTestCases(testCases.filter(tc => tc.id !== id));
    };

    const addTestResult = (result) => {
        const updatedTestCases = testCases.map(tc => {
            if (tc.id === result.testCaseId) {
                return { ...tc, results: [...(tc.results || []), result] };
            }
            return tc;
        });
        setTestCases(updatedTestCases);
    };

    return (
        <div className="App">
            <h1>Test Management</h1>
            <TestCaseForm addTestCase={addTestCase} />
            <TestCaseList 
                testCases={testCases} 
                updateTestCase={updateTestCase} 
                deleteTestCase={deleteTestCase} 
                setSelectedTestCase={setSelectedTestCase} 
            />
            {selectedTestCase && (
                <TestResultForm 
                    testCase={selectedTestCase} 
                    addTestResult={addTestResult} 
                />
            )}
        </div>
    );
};

export default App;