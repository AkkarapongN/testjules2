import React, { useState } from 'react';

const TestCaseForm = ({ onSubmit, initialData }) => {
    const [testCase, setTestCase] = useState(initialData || { scenario: '', steps: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTestCase({ ...testCase, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(testCase);
        setTestCase({ scenario: '', steps: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Test Scenario:
                    <input
                        type="text"
                        name="scenario"
                        value={testCase.scenario}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Test Steps:
                    <textarea
                        name="steps"
                        value={testCase.steps}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Save Test Case</button>
        </form>
    );
};

export default TestCaseForm;