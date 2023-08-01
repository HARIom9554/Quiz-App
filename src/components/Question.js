import React from 'react';

const Question = ({ category, question }) => {
  return (
    <div className="Question">
      <h2>{category}</h2>
      <p>{question}</p>
    </div>
  );
};

export default Question;
