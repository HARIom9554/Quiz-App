import React, { useState } from "react";

import ProgressBar from "./ProgressBar";
import data from "../data/questions.json";
import Question from "./Question";
import QuestionOptions from "./QuestionOptions";
import Result from "./Result";
import TopBar from "./TopBar";

const MCQScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  

  const handleOptionClick = (selectedOptionIndex) => {
    const currentQuestion = data[currentQuestionIndex];
    if (selectedOptionIndex === currentQuestion.correct_answer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setIsCorrect(false);
  };

  const currentQuestion = data[currentQuestionIndex];
  const totalQuestions = data.length;

  
  const category = currentQuestion.category
    .replace("%3A%20", ":")
    .replace("%20", " ");

  
  const difficulty = currentQuestion.difficulty.toLowerCase();
    
  const stars = getStarsFromDifficulty(difficulty);

  function getStarsFromDifficulty(difficulty) {
    switch (difficulty) {
      case "easy":
        return 1;
      case "medium":
        return 2;
      case "hard":
        return 3;
      default:
        return 0;
    }
  }

  return (
    <div className="App">
      <div className="ProgressBar">
        <ProgressBar
          currentQuestionIndex={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />
      </div>
      <div className="QuestionNumber">
        Question {currentQuestionIndex + 1} of {totalQuestions}
      </div>

      <div className="Category">{category}</div>

      <div className="Stars">
        {[...Array(5)].map((_, index) => (
          <span key={index} className={`Star ${index < stars ? "filled" : ""}`}>
            ★
          </span>
        ))}
      </div>

      <Question question={decodeURIComponent(currentQuestion.question)} />
      <QuestionOptions
        options={currentQuestion.incorrect_answers.concat([
          currentQuestion.correct_answer,
        ])}
        handleOptionClick={handleOptionClick}
      />
      {isCorrect !== null && (
        <Result isCorrect={isCorrect} handleNextQuestion={handleNextQuestion} />
      )}
      <div>
        <TopBar
          currentQuestionIndex={currentQuestionIndex + 1}
          totalQuestions={totalQuestions}
        />
      </div>
    </div>
  );
};

export default MCQScreen;
