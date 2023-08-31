import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import TextCards from './components/TextCards/TextCards';
import Header from "./components/NavBar/NavBar";
import {Routes, Route} from "react-router-dom";
import React from "react";
import AddForm from "./components/AddForm/AddForm";


function App() {
    const [texts, setTexts] = useState();

    // EFFECTS: retrieves the data of all Texts from the backend and creates a local representation
    const getAllTexts = async () => {
        try {
            const response = await api.get("");
            setTexts(response.data);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        getAllTexts();
    }, [])
    return (
        <div className="App">
            <Header></Header>
            <Routes>
                <Route path='/home' element={<TextCards texts={texts} setTexts={setTexts}/>}></Route>
                <Route path='/add' element={<AddForm texts={texts} setTexts={setTexts}></AddForm>}></Route>
            </Routes>
        </div>
    );
}

export default App;
