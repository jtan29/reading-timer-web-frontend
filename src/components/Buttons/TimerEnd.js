import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import './Buttons.css'
import React from 'react';

// The button that is responsible for ending the timer on a Text
const TimerEnd = ({text, texts, setTexts}) => {
    const textId = text.textId;

    // EFFECTS: sends a request to the backend to end the Timer, and uses the response to update the timer's status,
    // time elapsed, and time statement on the Text locally
    const timerEnd = async () => {
        try {
            const response = await api.put("/".concat(textId.toString(), "/", "end"));
            const newTime = response.data.elapsedTime;
            const timerRunning = response.data.timerRunning;
            const newTimeStatement = response.data.timeStatement;
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].elapsedTime = newTime;
            updatedTexts[index].timerRunning = timerRunning;
            updatedTexts[index].timeStatement = newTimeStatement;
            setTexts(updatedTexts);

        } catch (err) {
            console.error(err);
        }
    }

    return (

        <Button className={"time-button"} onClick={timerEnd} variant="warning">End Timer</Button>
    )
}
export default TimerEnd;