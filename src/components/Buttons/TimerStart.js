import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import './Buttons.css'
import React from 'react';

// The button that is responsible for starting the timer on a Text
const TimerStart = ({text, texts, setTexts}) => {
    const textId = text.textId;

    // EFFECTS: sends a request to the backend to start the Timer, and uses the response to update the timer's status,
    // on the Text locally
    const timerStart = async () => {
        try {
            const response = await api.put("/".concat(textId.toString(), "/", "start"));
            const newTime = response.data.elapsedTime;
            const timerRunning = response.data.timerRunning;
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].elapsedTime = newTime;
            updatedTexts[index].timerRunning = timerRunning;
            setTexts(updatedTexts);

        } catch (err) {
            console.error(err);
        }
    }

    return (

        <Button className={"time-button"} onClick={timerStart} variant="primary">Start Timer</Button>
    )
}
export default TimerStart;