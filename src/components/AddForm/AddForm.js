import Button from 'react-bootstrap/Button';
import api from '../../api/axiosConfig';
import React, {useState} from 'react';
import {Form} from "react-bootstrap";
import './AddForm.css'

// The form to create new Texts
const AddForm = ({texts, setTexts}) => {
    const [inputs, setInputs] = useState({});

    // EFFECTS: stores the value of each field in the form when it is changed
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    // EFFECTS: when submitted, sends a request to the backend to add a new Text with entered title, genre, and
    // wordcount and updates the local representation of the Texts
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(inputs);
        try {
            const response = await api.post("", {
                title: inputs.title,
                genre: inputs.genre,
                wordCount: inputs.wordCount,
            });
            const updatedTexts = [...texts];
            updatedTexts.push(response);
            setTexts(updatedTexts);
            alert("Added new text.");
            event.target.reset();
            setInputs(values => ({
                title: "",
                genre: "",
                wordCount: ""
            }));

        } catch (err) {
            console.error(err);
        }


    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Label>Enter title:</Form.Label>
            <Form.Control type="text" name="title" value={inputs.title}
                          placeholder="Title" onChange={handleChange}></Form.Control>
            <Form.Label>Enter word count:</Form.Label>
            <Form.Control type="number" name="wordCount" value={inputs.wordCount}
                          placeholder="0" onChange={handleChange}></Form.Control>
            <Form.Label>Select genre:</Form.Label>
            <Form.Select name="genre" onChange={handleChange}>
                <option>None selected</option>
                <option value="GENERAL">Fiction book</option>
                <option value="YA">Young adult book</option>
                <option value="GRAPHIC">Graphic novel</option>
                <option value="CHILDREN">Children's book</option>
                <option value="SHORT_STORY">Short story</option>
                <option value="F_OTHER">Any other fictional material</option>
                <option value="ARTICLE">Non-fiction article</option>
                <option value="TEXTBOOK">Textbook or other educational book</option>
                <option value="MEMOIR">Memoir, biography, or autobiography</option>
                <option value="SELF_HELP">Self-help book</option>
                <option value="NF_OTHER">Any other non-fiction material</option>
            </Form.Select>
            <Button className={"back-button"} variant="outline-secondary" href="home">Back</Button>
            <Button className={"submit-button"} type="submit">Submit</Button>
        </Form>
    )
}
export default AddForm;