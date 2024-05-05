import React, { useEffect, useState } from 'react';

function QuestionTimer({ timeout, onTimeout, mode }) {
    const [remainingTime, setRemainingTime] = useState(timeout);

    useEffect(() => {

        // console.log('set time')
        const timer = setTimeout(onTimeout, timeout);
        return () => { clearTimeout(timer); }
    }, [timeout, onTimeout]);

    useEffect(() => {

        // console.log('set interval')
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => Math.max(prevRemainingTime - 100, 0));
        }, 100);

        return () => { clearInterval(interval); }
    }, []);

    return <progress
        id="question-time"
        max={timeout}
        value={remainingTime}
        className={mode} />;
}

export default QuestionTimer;
