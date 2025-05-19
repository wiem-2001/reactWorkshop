import {useState} from 'react'

function ListManager({initialItems,placeholder}) {

    const [items, setItems] = useState(initialItems);
    const [newItem, setNewItem] = useState('');


const deleteItem = (index) => {
    const newItems = [...items]; // Copie du tableau
    newItems.splice(index, 1);   // Supprime 1 élément à la position index
    setItems(newItems);
  }
  const addItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem('');
    }
  };
  // n'oublie pas que onChange est un événement qui se produit lorsque la valeur d'un élément change
  return (
    <div>
        <h1>List Manager</h1>                                                                                                                       
        <input type="text" placeholder={placeholder} value={newItem}
        onChange={(e) => setNewItem(e.target.value)}/>  
        <button onClick={addItem}>Add</button>
        <ul >
            {items.map((item, index) => (
            <li key={index}>{item}
           <button onClick={() => deleteItem(index)}>Delete</button>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default ListManager
