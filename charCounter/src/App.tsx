import { useState } from 'react'
import { TextInput } from './components/TextInput/TextInput'
import { CharCounter } from './components/CharCounter/CharCounter'
// import { StatsDisplay } from './components/StatsDisplay/StatsDisplay'
import './App.css'
import './index.css'

function App() {
  const [text, setText] = useState("")
  const charCount = text.length;

  //Convert array of text into array of strings and use built in JS functions to remove 
  // white space from beginning and end with .trim() and then the split function splits on 
  // spaces, tabs and/or line breaks which then allows the check for blank or count how many words were formed
  const words = text.trim().split(/\s+/);
  const wordCount = text.trim() === "" ? 0 : words.length;

  // Assuming the average reading speed of 200 WPM, reading time can be found as follows:
  const readingTime = Number((wordCount / 200).toFixed(2))

  return (
    <div className="p-8">
      {/* Call to display input field and text from user */}
      <TextInput onTextChange={setText} />

      {/* Call to display character count, word count and time taken to type */}
      <CharCounter characterCount={charCount} wordCount={wordCount} readingTime={readingTime} />
    </div>
  )
}

export default App