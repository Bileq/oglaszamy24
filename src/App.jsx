// import { useState } from 'react'
import './App.css'

function App() {
  //const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div className='page'>
      <form onSubmit={handleSubmit}>

      {/* Contact info */}

        <div>
          <label>Imie i nazwisko: </label>
          <input id="contact_name" type="string" defaultValue={"imie"}/>
        </div>
        <div>
          <label>Telefon: </label>
          <input id="telephone" type="integer" defaultValue={420213769}/>
        </div>

      {/* Basic Informations */}

        <div>
          <label>Kategoria motoryzacja: </label>
          <input id="cat1_id" type="number" defaultValue={1}/>
        </div>
        <div>
          <label>Kategoria samochody: </label>
          <input id="cat2_id" type="number" defaultValue={2}/>
        </div>
        <div>
          <label>Marka samochodu: </label>
          <select id="cat3_id">
            <option value={0}>Toyota</option>
            <option value={1}></option>
            <option value={2}></option>
            <option value={3}></option>
            <option value={4}></option>
            <option value={5}></option>
          </select>
        </div>
        <div>
          <label>miasto: </label>
          <input id="city_id" type="number" defaultValue={4}/>
        </div>
        <div>
          <label>rodzaj ogloszenia</label>
          <input id="ad_type" type="integer" defaultValue={1}/>
        </div>
        <div>
          <label>Tytul ogloszenia: </label>
          <input id="title" type="string" min={5}/> 
        </div>
        <div id='divDescription'>
            <label id='labelDescription'>opis ogloszenia: </label>
            <textarea id="description" max={4000}></textarea>
        </div>
        <div>
          <label>Cena</label>
          <input id="price" type="integer" />
        </div>

        <div>
          <label>Pierwsze zdjecie: </label>
          <input type='file'></input>
        </div>  
        <div>
          <label>Drugie zdjecie: </label>
          <input type='file'></input>
        </div> 


        <button type="submit">Wyslij</button>
      </form>
    </div>
    
    
    
  )
}

export default App
// <>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>