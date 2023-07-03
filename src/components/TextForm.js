import React, {useState, useEffect} from  'react'
// import PropTypes from 'prop-types'

export default function TextForm(props) {
  const [text, setText] = useState(''); // This state is for the text area
  const [lastWord, setLastWord] = useState(''); // This state is for the last word
  const [wordCount, setWordCount] = useState(0); // This state is for the word count
  const [bgColor, setBgColor] = useState('bg-yellow-50'); 
  const [height, setHeight] = useState(props.winDim.winHi);
  const [width, setWidth] = useState(props.winDim.winWi);

  
  const upperCase = () => {
    let text = document.getElementById('message').value;
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted To UpperCase"); // 
  }
  const clearText = () => {
    document.getElementById('message').value = '';
    setText('');
    props.showAlert("Text Cleared");
  }

  const textReset = (event) => {
    setText(event.target.value);
  }

  const lowerCase = () => {
    let text = document.getElementById('message').value;
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted To LowerCase");
  }

  const rExtraSpace = () => {
    let text = document.getElementById('message').value;
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Space removed");
  }

  const handleCopy = () => {       
    navigator.clipboard.writeText(text);
    props.showAlert("Copied to ClipBoard");
  }

  const getHeight = (value) => {
    return height*value/746
  }

  const getWidth = (value) => {
    return width*value/1536
  }

  useEffect(() => {
    // array of words
    const words = text.split(' ');

    if (props.Darkmode) {
      setBgColor('bg-yellow-50');
    } else {
      setBgColor('bg-[#a8dadc]');
    }
    setHeight(props.winDim.winHi);
    setWidth(props.winDim.winWi);
    
    let wordCount = 0;
    var regExp = /^[a-zA-Z]/;
    words.forEach((word) => {
        if (word.trim() !== '') {
          if(word.match(regExp)) {  
            setLastWord(word)                
            wordCount++;                   
          }
        }
    });
    setWordCount(wordCount);
  }, [text, props.Darkmode, props.winDim]);
  
  return (
    <div>
        <h1 className='text-lg font-bold font-robot bg-yellow-200 rounded' style={{ position: 'absolute', top: `${getHeight(170)}px`, left: `${getWidth(120)}px` }}>{props.heading}</h1>

        <textarea id="message" rows="8" value={text} className={`block p-2.5 w-2/3 font-serif text-md text-black ${bgColor} rounded-lg border 
        `} style={{ position: 'absolute', top:`${getHeight(200)}px`, left: `${getWidth(120)}px`, resize:'none'}} placeholder="text here"
        onChange={textReset} ></textarea>

        <button className="flex px-2 py-2 flex items-center h-8 bg-blue-300 hover:bg-blue-400 rounded "onClick={upperCase} style={{ position: 'absolute', top: `${getHeight(420)}px`, left: `${getWidth(120)}px` }}>Upper Case</button>
        
        <button className="flex px-2 py-2 flex items-center h-8 bg-blue-300 hover:bg-blue-400 rounded "onClick={lowerCase} style={{ position: 'absolute', top: `${getHeight(420)}px`, left: `${getWidth(220)}px` }}>Lower Case</button>
        
        <button className="flex px-2 py-2 flex items-center h-8 bg-blue-300 hover:bg-blue-400 rounded "onClick={rExtraSpace} style={{ position: 'absolute', top: `${getHeight(420)}px`, left: `${getWidth(320)}px` }}>Remove Extra Space</button>
        
        <button className="flex px-2 py-2 flex items-center h-8 bg-blue-300 hover:bg-blue-400 rounded "onClick={handleCopy} style={{ position: 'absolute', top: `${getHeight(420)}px`, left: `${getWidth(480)}px` }}>Copy Text</button>

        <button className="flex px-2 py-2 flex items-center h-8 bg-blue-300 hover:bg-blue-400 rounded "onClick={clearText} style={{ position: 'absolute', top: `${getHeight(420)}px`, left: `${getWidth(568)}px` }}>Clear Text</button>
        
        <div className="container bg-[#80ed99] border border-gray-300 rounded p-4">
          <h1 className='text-lg' style={{ position: 'absolute', top: `${getHeight(170)}px`, left: `${getWidth(1260)}px` }}>Your Text Summary</h1>
        </div>

        <div className={`container h-${getHeight(52)} w-${getWidth(80)} bg-[#80ed99] border border-gray-300 rounded p-4 overflow-auto`} style={{ position: 'absolute', top: `${getHeight(200)}px`, left: `${getWidth(1170)}px` }}>
          <p> {wordCount} word and {text.length} character  </p>
          <p> {(0.2 * wordCount).toFixed(3)}s reading time </p>
          <p > Last Word : {lastWord} </p>
        </div>    
    </div> 
  )
}
