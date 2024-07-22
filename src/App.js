import logo from './logo.svg';
import axios from "axios"
import './App.css';
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";



function App() {
  const  [image, updateImage] = useState()
  const  [prompt, updatePrompt] = useState()

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  const generate = async (prompt) => {
    const result = await axios.get(`http://127.0.0.1:8000/?prompt=${prompt}`)
    updateImage(result.data)
  }

  return (
    <div className="App">
      <h1>Stable Diffuser ⚙️</h1>
      <input height={"300px"} value={prompt} onChange={e => updatePrompt(e.target.value)}></input>
      <button onClick={e => generate(prompt)} >Generate</button>
      <br/>
      <br/>
      <br/>
      {ClipLoader.loading ? <ClipLoader
        color={color}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : <img width={"300px"} src={`data:image/png;base64,${image}`}></img>}
      
    </div>
  );
}

export default App;
