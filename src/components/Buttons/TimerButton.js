import React from 'react';
import TimerEnd from "./TimerEnd";
import TimerStart from "./TimerStart";

// Responsible for choosing the correct type of timer-related button to display
const TimerButton = ({text, texts, setTexts}) => {
    if (text.timerRunning) {
        return (
            <TimerEnd text={text} texts={texts} setTexts={setTexts}></TimerEnd>
        )
    } else {
        return (
            <TimerStart text={text} texts={texts} setTexts={setTexts}></TimerStart>
        )
    }
}
export default TimerButton;