import React,{useState} from 'react'

const Bgc = () => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const colors = ['blue', 'red', 'green'];
    const [colorIndex, setColorIndex] = useState(0);
  
    const handleButtonClick = () => {
      const nextIndex = (colorIndex + 1) % colors.length;
      setBackgroundColor(colors[nextIndex]);
      setColorIndex(nextIndex);
    };
  return (
    <>
      <div style={{ backgroundColor }}>
      <button onClick={handleButtonClick}>Change Background Color</button>
    </div>
    </>
  )
}

export default Bgc
