import React from 'react';
import USAMap from '../components/USAMap';

function Slider() {
  const [value, setValue] = React.useState(1976);
  const onInput = () => {
    var input = document.getElementById("myRange");
    var currentVal = input.value;
    setValue(currentVal);
  }

  return (
    <>
      <USAMap value={value} />
      <div className="slidecontainer">
        <input 
          type="range"
          min="1976"
          max="2016"
          defaultValue="3" 
          onInput={onInput}
          className="slider" 
          id="myRange" 
          step="4"
        />
        <p><span id="demo">{value}</span></p>
      </div>
    </>
  );
};

export default Slider;
