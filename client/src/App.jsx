import axios from "axios";
import { useState } from "react";

function App() {
  const [files,setFiles] = useState([])
  const [photo,setPhoto] = useState(null)
  const [id,setId] = useState(0)
  const [Did,setDid] = useState(0)

  const handleImage = async (event) =>{
    event.preventDefault()
    if(!files) return
    const formData = new FormData()
    files.forEach((file) =>{
      formData.append('image',file)
    })
    
    try {
      const response = await axios.post('http://localhost:3000/upload',formData)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleShow = async (event) =>{
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/photo",{id})
      
      setPhoto(response.data.data.photo)
    } catch (error) {
      console.log(error)
    }
  }
  
  const hadnleDelete = async (event) =>{
    event.preventDefault()
    try {
      const response = await axios.post("http://localhost:3000/delete",{Did})
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <form onSubmit={handleImage}>
        <input type="file" onChange={(e) => setFiles(Array.from(e.target.files))} multiple/>
        <button type="submit">Отправить</button>
      </form>
      <form onSubmit={handleShow}>
        <input type="number" value={id} onChange={e => setId(e.target.value)}/>
        <button>Отправить</button>
      </form>
      <img src={`http://localhost:3000/${photo}`} />
      <form onSubmit={hadnleDelete}>
        <input type="number" value={Did} onChange={e => setDid(e.target.value)}/>
        <button>Удалить</button>
      </form>
    </div>
  )
}

export default App