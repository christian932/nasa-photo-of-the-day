import React, {useState, useEffect } from "react";
import Header from './components/Header'
import Photo from './components/Photo'
import Title from './components/Title'
import Explanation from './components/Explanation'
import Date from './components/Date'
import axios from 'axios'
import "./App.css"
import styled from 'styled-components';

const HeaderDiv = styled.div `
color: blue;
font-family: courier-new;
padding: 20px;
`

const StyledApp = styled.div `
background-color: gray; 
padding: 185px;
`

const StyledPhoto = styled.div `
color: #f7b508;
font-family: courier-new;
padding: 20px;
word-spacing: 5px;
`

function App() {
  const [photo, setPhoto] = useState({})

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=mKuUOhcDj4iX6SswbMgbgHEmmXuOQurAKhZKNnGc')
        .then(res=> {
            console.log(res)
            setPhoto(res.data)
        })
    }, [])

  return (
    <div className="App">
      <Header/>
      <Title title={photo.title}/>
      <Date date={photo.date}/>
      <Photo url={photo.url}/> 
      <Explanation explanation={photo.explanation}/>
    </div>
  );
}

export default App;