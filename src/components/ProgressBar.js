import React from 'react';

const ProgressBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progress = ((currentQuestionIndex) / (totalQuestions )) * 100;

  return (
    <div className="ProgressBar">
      <div className="Progress" style={{ width: `${progress -1}%` }}></div>
    </div>
  );
};

export default ProgressBar;
