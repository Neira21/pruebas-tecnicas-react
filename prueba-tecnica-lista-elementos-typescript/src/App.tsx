import './App.css'
import { useItems } from './hooks/UseItems'
import Item from './components/Item'
import UseSEO from './hooks/UseSEO'

//Se usa type para definir un tipo de dato y se usa interface para definir un objeto

export type ItemId = `${string}-${string}-${string}-${string}-${string}`

export interface Item {
  id: ItemId
  timestamp: number
  text: string  
}


function App() {
  const {items, addItem, deleteItem } = useItems()
  UseSEO({
    title: `[${items.length}] Prueba Técnica de React]`,
    description: 'Añadir y eliminar elementos de una lista',
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    //Estrategia 1, trampa con typescript
    //No se recomienda
    //const input = elements.namedItem('item') as HTMLInputElement

    //Estrategia 2, es asegurarse que realmente es lo que es
    const input = elements.namedItem('item')
    const isInput = input instanceof HTMLInputElement
    if(!isInput || input == null) return

    addItem(input.value)
    input.value = ''
  }
  
  //Otra forma con formData
  /*
  const handleSubmit2 = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: formData.get('item') as string
    }

    setItems([...items, newItem])
  }
  */

  //Eliminar un elemento
  const handleDelete = (id: ItemId) => {
    deleteItem(id)
  }

  return (
    <main>
      <aside>
        <h1>Prueba Técnica de React</h1>
        <h2>Añadir y eliminar elementos de una lista</h2>
        <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
          <label>
            Elemento a introducir
            <input 
              type="text" 
              name='item' 
              placeholder='Ir a la compra'
              required  />
          </label>
          <button type="submit">Añadir</button>
        </form>
      </aside>
      <section>
        <h2>Lista de Elementos</h2>
        {items.length === 0 
        ? <p>No hay elementos</p> 
        : <ul>
          {
            items.map((item) =>(
              <Item 
                handleClick={()=>handleDelete(item.id)}
                {...item}
                key={item.id}
                />
              )
            )
          }
          </ul>}        
      </section>
    </main>
  )
}

export default App
