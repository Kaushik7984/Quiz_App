import React, { useCallback, useState } from 'react';
import QUESTIONS from '../Components/question.js';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

function Quiz() {
    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {


        setUserAnswers((prevUserAnswers) => { return [...prevUserAnswers, selectedAnswer] });


    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    if (quizIsComplete) {
        return (
          <Summary userAnswers={userAnswers} />
        );
    }



    // const shuffledAnswers = QUESTIONS[activeQuestionIndex].answers.sort(() => 0.5 - Math.random());

    return (
        <div id='quiz'>

            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}

                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div>
    );
}

export default Quiz;
