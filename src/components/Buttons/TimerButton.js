import React from 'react';
import TimerEnd from "./TimerEnd";
import TimerStart from "./TimerStart";

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