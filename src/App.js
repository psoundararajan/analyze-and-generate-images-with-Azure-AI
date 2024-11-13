import React, {useState} from 'react';


function App() {
  const [text, setText] = useState('');

  const handleButtonClick = (buttonText) => {
    console.log(buttonText + ' clicked');
  }
  var styles = {
    inputsContainer: {
      flex: 1
    },
    fullWidthButton: {
      backgroundColor: 'blue',
      height:70,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center'
    },
    fullWidthButtonText: {
      fontSize:24,
      color: 'white'
    },
    input: {
      padding: "20 px",
      width: "400px",
      height: 20,
    },
  }
  return <div>
    <h1>Computer vision</h1>
    <div>Insert URL or type prompt:</div>
    <div>
   <input type="text" value={text} placeholder = "Enter URL to analyze or textual prompt to generate an image" style={styles.input} onChange={(e) => setText(e.target.value)} />
   </div>
    <div>
   <button onClick={() => handleButtonClick('Analyze')}>Analyze</button>
   <button onClick={() => handleButtonClick('Generate')}>Generate</button>
   </div>
  </div>;
}

export default App;
