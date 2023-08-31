import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import React from 'react';
import './Buttons.css'

// The button that deletes a Text
const DeleteText = ({text, texts, setTexts}) => {

    // EFFECTS: sends a request to the backend to remove the Text from the database and removes the local representation
    const deleteText = async () =>{
        try {
            const response = await api.delete("/".concat(text.textId.toString(),"/","delete"));
            const index = texts.indexOf(text);
            const updatedTexts = [...texts];
            updatedTexts.splice(index, 1);
            setTexts(updatedTexts);

        } catch(err) {
            console.error(err);
        }
    }

    return (

        <Button className={'delete-button'} onClick={deleteText} variant="danger">Delete</Button>
    )
}
export default DeleteText;