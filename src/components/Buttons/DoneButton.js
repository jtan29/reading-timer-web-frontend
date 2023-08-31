import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import './Buttons.css'
import React from 'react';


// The button that changes a Text's status to complete
const DoneButton = ({text, texts, setTexts}) => {

    // EFFECTS: sends a request to the backend to change the Text's status to complete and updates the Text in the local
    // representation
    const markDone = async () => {
        try {
            const response = await api.put("/".concat(text.textId.toString(), "/", "complete"));
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].complete = true;
            setTexts(updatedTexts);

        } catch (err) {
            console.error(err);
        }
    }

    return (

        <Button className={"status-button"} onClick={markDone} variant="outline-primary">Mark Done</Button>
    )
}
export default DoneButton;