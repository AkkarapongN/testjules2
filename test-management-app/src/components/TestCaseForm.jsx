import React, { useState } from 'react';

const TestCaseForm = ({ onSubmit, initialData }) => {
    const [testCase, setTestCase] = useState(initialData || { title: '', description: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTestCase({ ...testCase, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(testCase);
        setTestCase({ title: '', description: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={testCase.title}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Description:
                    <textarea
                        name="description"
                        value={testCase.description}
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