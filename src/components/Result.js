import React from 'react';

const Result = ({ isCorrect, handleNextQuestion }) => {
  const resultMessage = isCorrect ? 'Correct!' : 'Sorry.Please try again”';

  return (
    <div className='Result'>
      <p>{resultMessage}</p>
      <button onClick={handleNextQuestion}>Next Question</button>
    </div>
  );
};

export default Result;
