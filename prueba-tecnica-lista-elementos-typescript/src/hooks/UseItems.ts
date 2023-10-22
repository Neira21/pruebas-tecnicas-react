import { useState } from "react"
import { type Item } from "../App"

export const useItems = () => {
  const [items, setItems] = useState<Item[]>([])

  const addItem = (text: string) => {
    const newItem: Item = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      text: text
    }

    setItems([...items, newItem])
  }

  const deleteItem = (id: string) => {
    setItems(items.filter(item => item.id !== id))
  }

  return {
    items,
    addItem,
    deleteItem
  }

}