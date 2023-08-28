import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';
import TextCards from './components/TextCards/TextCards';
import {Routes, Route} from "react-router-dom";
import React from "react";

function App() {
  const [texts, setTexts] = useState();
  const getAllTexts = async () =>{
    try {
      const response = await api.get("");
      console.log(response.data);
      setTexts(response.data);
    }
    catch(err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getAllTexts();
  },[])
  return (
      <div className="App">
        <Routes>
          <Route path='/' element={<TextCards texts={texts} />}></Route>
        </Routes>
      </div>
  );
}

export default App;
