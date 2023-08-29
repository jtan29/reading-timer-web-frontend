import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import React from 'react';

const DeleteText = ({text, texts, setTexts}) => {
    const textId = text.textId;

    const deleteText = async () =>{
        try {
            const response = await api.delete("/".concat(textId.toString(),"/","delete"));
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts.splice(index, 1);
            setTexts(updatedTexts);

        } catch(err) {
            console.error(err);
        }
    }

    return (

        <Button onClick={deleteText} variant="danger">Delete</Button>
    )
}
export default DeleteText;