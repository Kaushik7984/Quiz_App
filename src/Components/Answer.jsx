import React, { useRef } from 'react'

function Answer({ answers, selectedAnswer, answerState, onSelect }) {
    
    const shuffledAnswers = useRef (); 

    if (!shuffledAnswers.current) {
        shuffledAnswers.current = [...answers];
        shuffledAnswers.current.sort(() => Math.random() - 0.5)
    }

    return (
        <ul id='answers'>
            {
                shuffledAnswers.current.map((answer) => {
                    const isSelected = selectedAnswer == answer;
                    let cssClasses = '';
                    if (answer === 'answered' && isSelected) {
                        cssClasses = 'selected'
                    }

                    if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
                        cssClasses = answerState;
                    }

                    return (
                        <li key={answer} className='answer'>
                            <button
                                onClick={() => onSelect(answer)}
                                className={cssClasses} disabled={answerState !== ''}>
                                {answer}
                            </button>
                        </li>);
                }
                )
            }
        </ul>
    )
}

export default Answer


// import React, { useEffect, useState } from 'react';

// function Answer({ answers = [], selectedAnswer, answerState, onSelect }) {
//     const [shuffledAnswers, setShuffledAnswers] = useState([]);

//     useEffect(() => {
//         // Ensure answers is an array and has content before shuffling
//         if (Array.isArray(answers) && answers.length > 0) {
//             const shuffled = [...answers];
//             shuffled.sort(() => Math.random() - 0.5); // Shuffle the answers
//             setShuffledAnswers(shuffled);
//         }
//     }, [answers]); // This effect runs when the `answers` prop changes

//     return (
//         <ul id='answers'>
//             {shuffledAnswers.map((answer, index) => {
//                 const isSelected = selectedAnswer === answer.text; // Assuming answer is an object with a 'text' property
//                 let cssClasses = '';

//                 if (isSelected) {
//                     cssClasses += 'selected';
//                 }

//                 if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
//                     cssClasses += ' ' + answerState;
//                 }

//                 return (
//                     <li key={`${answer.text}-${index}`} className='answer'> // Improved key uniqueness
//                         <button
//                             onClick={() => onSelect(answer.text)} // Assuming you want to pass the text when selected
//                             className={cssClasses.trim()}>
//                             {answer.text} // Rendering the text property of the answer object
//                         </button>
//                     </li>
//                 );
//             })}
//         </ul>
//     );
// }

// export default Answer;
