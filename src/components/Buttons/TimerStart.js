import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import React from 'react';

const TimerStart = ({text, texts, setTexts}) => {
    const textId = text.textId;

    const timerStart = async () =>{
        try {
            const response = await api.put("/".concat(textId.toString(),"/","start"));
            const newTime = response.data.elapsedTime;
            const timerRunning = response.data.timerRunning;
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].elapsedTime = newTime;
            updatedTexts[index].timerRunning = timerRunning;
            setTexts(updatedTexts);

        } catch(err) {
            console.error(err);
        }
    }

    return (

        <Button onClick={timerStart} variant="primary">Start Timer</Button>
    )
}
export default TimerStart;