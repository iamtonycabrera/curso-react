import { useState } from 'react';
import './App.css';
import html2canvas from 'html2canvas';

function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [image, setImage] = useState('');

  const onChangeLinea1 = function(valor){
    setLinea1(valor.target.value);
  }
  const onChangeLinea2 = function(valor){
    setLinea2(valor.target.value);
  }
  const onChangeImage = function(valor){
    setImage(valor.target.value)
  }
  const onExport = function(valor){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL('image/png');
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
  });
  }

  return (
    <div className="App">

      {/* select picker de meme */}
      <select onChange={onChangeImage}>
        <option value='fire'>Casa en llamas</option>  
        <option value='futurama'>Futurama</option>  
        <option value='history'>History Channel</option>  
        <option value='matrix'>Matrix</option>  
        <option value='philosoraptor'>Philosoraptor</option>  
        <option value='smart'>Smart Guy</option>  
      </select> <br />
      {/*input text - primera linea */}
      <input onChange={onChangeLinea1} type='text' placeholder='Linea 1'/> <br />
      {/* input text - segunda linea */}
      <input onChange={onChangeLinea2} type='text' placeholder='Linea 2'/> <br />
      {/* boton exportar meme */}
      <button onClick={onExport}>Export</button>

      <div className='meme' id='meme'>
        <span>{linea1}</span> <br />
        <span>{linea2}</span> <br />
        <img src={'/img/'+ image +'.jpg'}/>
      </div>
      
    </div>
  );
}

export default App;
