import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import React from 'react';

const DoneButton = ({text, texts, setTexts}) => {
    const textId = text.textId;

    const markDone = async () =>{
        try {
            const response = await api.put("/".concat(textId.toString(),"/","complete"));
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts[index].complete = true;
            console.log(updatedTexts);
            setTexts(updatedTexts);

        } catch(err) {
            console.error(err);
        }
    }

    return (

        <Button onClick={markDone} variant="outline-primary">Mark Done</Button>
    )
}
export default DoneButton;