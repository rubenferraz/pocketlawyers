import { useState } from 'react'
import axios from 'axios'

function UploadForm({ onResult }) {
  const [file, setFile] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!file) return

    setLoading(true)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const response = await axios.post('http://localhost:5000/analisar', formData)
      onResult(response.data.resposta)
    } catch (err) {
      onResult('Erro ao analisar o documento.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="file"
        accept="image/*,.pdf"
        capture="environment"
        onChange={handleFileChange}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'A processar...' : 'Analisar'}
      </button>
    </form>
  )
}

export default UploadForm
