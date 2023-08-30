import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import './Buttons.css'
import React from 'react';

const TimerEnd = ({text, texts, setTexts}) => {
    const textId = text.textId;

    const timerEnd = async () =>{
        try {
            const response = await api.put("/".concat(textId.toString(),"/","end"));
            const newTime = response.data.elapsedTime;
            const timerRunning = response.data.timerRunning;
            const newTimeStatement = response.data.timeStatement;
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].elapsedTime = newTime;
            updatedTexts[index].timerRunning = timerRunning;
            updatedTexts[index].timeStatement = newTimeStatement;
            setTexts(updatedTexts);

        } catch(err) {
            console.error(err);
        }
    }

    return (

        <Button className={"time-button"} onClick={timerEnd} variant="warning">End Timer</Button>
    )
}
export default TimerEnd;