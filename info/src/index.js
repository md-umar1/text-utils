import React from 'react';
import ReactDom from 'react-dom';
import App from './App'
import './index.css';

const Element=()=>{
  return(
    <div><App/></div>
  )
}
ReactDom.render(<Element/>,document.getElementById('root'))