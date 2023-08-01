import React, { useState } from 'react';

const QuestionOptions = ({ options, handleOptionClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const decodeOption = (option) => {
    return decodeURIComponent(option.replace(/\+/g, ' '));
  };

  const handleOptionSelection = (index) => {
    setSelectedOption(index);
    handleOptionClick(options[index]);
  };

  return (
    <div className="Options">
      {options.map((option, index) => (
        <button
          key={index}
          onClick={() => handleOptionSelection(index)}
          className={selectedOption === index ? 'selected' : ''}
        >
          {decodeOption(option)}
        </button>
      ))}
    </div>
  );
};

export default QuestionOptions;
