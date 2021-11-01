import React, {useState} from 'react';
import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {


  console.log(`RUNNING`);
const [showParagraph,setShowParagraph] = useState(false);

const onClickHandler = () => {
  setShowParagraph(prevShow => !prevShow);
}

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false}/>
<Button onClick={onClickHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;
