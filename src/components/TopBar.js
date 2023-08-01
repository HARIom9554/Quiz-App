import React from "react";

const TopBar = ({ currentQuestionIndex, totalQuestions }) => {
  const progressPercentage = (currentQuestionIndex  / totalQuestions  ) * 100;
  const limitedProgressPercentage = Math.min(progressPercentage - 5, 75);

  return (
    <div className="TopBar">
      <div className="Score">
        Score: {limitedProgressPercentage.toFixed(0)}%
        <span className="MaxScore">Max Score: 75%</span>
      </div>
      <div className="PerBar">
        <div
          className="PerProgress"
          style={{ width: `${limitedProgressPercentage  }%` }}
        ></div>
      </div>
    </div>
  );
};

export default TopBar;
