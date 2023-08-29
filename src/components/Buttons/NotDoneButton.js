import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import './Buttons.css'
import React from 'react';

const NotDoneButton = ({text, texts, setTexts}) => {
    const textId = text.textId;

    const markNotDone = async () =>{
        try {
            const response = await api.put("/".concat(textId.toString(),"/","incomplete"));
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].complete = false;
            setTexts(updatedTexts);

        } catch(err) {
            console.error(err);
        }
    }

    return (

        <Button className={"status-button"} onClick={markNotDone} variant="outline-secondary">Mark Not Done</Button>
    )
}
export default NotDoneButton;