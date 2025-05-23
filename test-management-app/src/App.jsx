import React, { useState } from 'react';
import TestCaseForm from './components/TestCaseForm';
import TestCaseList from './components/TestCaseList';
import TestResultForm from './components/TestResultForm';
import TestResultList from './components/TestResultList'; // Import TestResultList

const App = () => {
    const [testCases, setTestCases] = useState([]);
    const [selectedTestCase, setSelectedTestCase] = useState(null); // For editing case or adding result
    const [viewingResultsFor, setViewingResultsFor] = useState(null); // For viewing results list

    const addTestCase = (testCase) => {
        setTestCases([...testCases, { ...testCase, id: Date.now(), results: [] }]);
        // Optionally, clear selections
        setSelectedTestCase(null);
        setViewingResultsFor(null);
    };

    const updateTestCase = (updatedTestCase) => {
        setTestCases(testCases.map(tc => (tc.id === updatedTestCase.id ? { ...tc, ...updatedTestCase } : tc)));
        setSelectedTestCase(null); // Clear selection after update
        setViewingResultsFor(null);
    };

    const deleteTestCase = (id) => {
        setTestCases(testCases.filter(tc => tc.id !== id));
        setSelectedTestCase(null);
        setViewingResultsFor(null);
    };

    const addTestResult = (result) => {
        const updatedTestCases = testCases.map(tc => {
            if (tc.id === result.testCaseId) {
                return { ...tc, results: [...(tc.results || []), { ...result, id: Date.now() }] };
            }
            return tc;
        });
        setTestCases(updatedTestCases);
        setSelectedTestCase(null); // Clear selection after adding result
        setViewingResultsFor(null);
    };

    const handleViewResults = (testCaseId) => {
        setViewingResultsFor(testCaseId);
        setSelectedTestCase(null);
    };

    const handleAddResultClick = (testCase) => {
        setSelectedTestCase(testCase);
        setViewingResultsFor(null);
    };

    const handleEditCaseClick = (testCase) => {
        setSelectedTestCase(testCase);
        setViewingResultsFor(null);
    };
    
    const currentTestCaseForResults = viewingResultsFor 
        ? testCases.find(tc => tc.id === viewingResultsFor) 
        : null;

    return (
        <div className="App">
            <h1>Test Management</h1>

            {/* Form for adding a new test case */}
            {!selectedTestCase && !viewingResultsFor && (
                 <h2>Add New Test Case</h2>
            )}
            {!selectedTestCase && !viewingResultsFor && (
                 <TestCaseForm onSubmit={addTestCase} initialData={{ scenario: '', steps: '' }} />
            )}

            <hr/>
            <TestCaseList 
                testCases={testCases} 
                onEdit={handleEditCaseClick} 
                onDelete={deleteTestCase} 
                onViewResults={handleViewResults}
                onAddResult={handleAddResultClick}
            />
            <hr/>

            {/* Section for Viewing Test Results */}
            {currentTestCaseForResults && (
                <div>
                    <h2>Results for: {currentTestCaseForResults.scenario}</h2>
                    <TestResultList results={currentTestCaseForResults.results} />
                    <button onClick={() => setViewingResultsFor(null)}>Back to Test List</button>
                </div>
            )}

            {/* Section for Adding a Test Result or Editing a Test Case */}
            {selectedTestCase && !viewingResultsFor && (
                <div>
                    {/* Form for adding a result to the selected test case */}
                    <div>
                        <h2>Add Result for: {selectedTestCase.scenario}</h2>
                        <TestResultForm 
                            testCaseId={selectedTestCase.id} 
                            onSubmit={addTestResult} 
                        />
                    </div>
                    <hr/>
                    {/* Form for editing the selected test case */}
                    <div>
                        <h2>Edit Test Case: {selectedTestCase.scenario}</h2>
                        <TestCaseForm 
                            onSubmit={(updatedData) => {
                                updateTestCase({ ...selectedTestCase, ...updatedData });
                            }} 
                            initialData={selectedTestCase} 
                        />
                    </div>
                     <button onClick={() => setSelectedTestCase(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
};

export default App;