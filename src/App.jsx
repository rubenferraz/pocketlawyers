import { useState } from 'react'
import UploadForm from './components/UploadForm'
import ResultCard from './components/ResultCard'

function App() {
  const [result, setResult] = useState(null)

  return (
    <div style={{ padding: '2rem', maxWidth: 600, margin: 'auto' }}>
      <h1>Pocket Lawyers</h1>
      <p>Carrega ou tira foto de um documento para explicação simples.</p>
      <UploadForm onResult={setResult} />
      {result && <ResultCard text={result} />}
    </div>
  )
}

export default App
