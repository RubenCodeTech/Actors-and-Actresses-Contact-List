import './App.css';
import contacts from './contacts.json'
import { useState } from 'react';
function App() {
  const [contactos, setContactos] = useState([contacts[0], contacts[1], contacts[2], contacts[3], contacts[4]])
  function addContact() {
    const randomContact = contacts[Math.floor(Math.random() * ((contacts.length - 1) - 5 + 1)) + 5]
    const newContact = [...contactos, randomContact]
    setContactos(newContact);
  }
  function SortByName() {
    const sortContactosName = [...contactos].sort((a, b) => a.name > b.name ? 1 : -1,);
    setContactos(sortContactosName)
  }
  function SortByPopularity() {
    const sortContactosPopularity = [...contactos].sort((a, b) => b.popularity - a.popularity);
    setContactos(sortContactosPopularity)
  }
  function deleteContact(e) {
    e.target.parentElement.parentElement.remove()
    // const newContact = contactos.filter(contact => contact !== {deletedContact}) 
    // setContactos(newContact)

  }
  return (
    <div className="App">
      <button onClick={addContact}>Add Random Contact</button>
      <button onClick={SortByPopularity}>Sort by popularity</button>
      <button onClick={SortByName}>Sort by name</button>
      <table className='box'>
        {
          contactos.map(contacts => (
            <thead key={contacts.id}>
              <tr >
                <th>Picture <br></br><img className='img' src={contacts.pictureUrl} alt={'human'}></img></th>
                <th>Name<br></br>{contacts.name}</th>
                <th>Popularity<br></br>{contacts.popularity.toFixed(2)}</th>
                <th>Won Oscar<br></br>{contacts.wonOscar ? <i className="fas fa-trophy"></i> : null}</th>
                <th>Won Emmy<br></br>{contacts.wonEmmy ? <i className="fas fa-star-christmas"></i> : null}</th>
                <th><button onClick={deleteContact}>Delete</button></th>
              </tr>
            </thead>

          ))
        }

      </table>
    </div>
  )
}


export default App;
