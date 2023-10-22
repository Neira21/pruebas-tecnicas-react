import './App.css'
import { useState } from 'react'


function App() {
  const [value, setValue] = useState('')
  const [list, setList] = useState([])
  const [error, setError] = useState(false)

  const handleChange = (e) =>{
    setValue(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!value.trim()){
      setError(true)
      return
    }
    setError(false)
    setList([...list, value])
    setValue('')
  }

  const handleDelete = (id) => {
    const newList = list.filter((item, index) => index !== id)
    setList(newList)
  }

  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Ingrese un valor' value={value} onChange={handleChange} />
        <button type='submit'>Agregar Elemento</button>
      </form>
      {error && <p className='error'>Error</p>}
      <div className='ListContainer'>
        {list.length === 0 ? <p>No hay elementos en la lista</p> : list.map((item, index) => <div onClick={()=>handleDelete(index)} className='bloque' key={index}>{item}</div>)}
      </div>
    </div>
  )
}

export default App
