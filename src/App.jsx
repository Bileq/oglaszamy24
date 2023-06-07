import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [categories, setCategories] = useState(0);
  const apiKey = "BDc4JU6zygD3NDiV31ifniVDHoCClu5c";
  const url = "http://localhost:3000/api/categories";
  const options = {
    method: "GET",
    headers: {
      "API-Key": apiKey,
    },    
  };

  useEffect(() => {
    fetch(url, options)
        .then((response) => (response.json()))
        .then(data => setCategories(data))
  }, []);

console.log(categories)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="page">
      <form onSubmit={handleSubmit}>
        {/* Contact info */}
        <div>{/* {categories} */}</div>

        <div>
          <label>Imie i nazwisko: </label>
          <input id="contact_name" type="string" defaultValue={"imie"} />
        </div>
        <div>
          <label>Telefon: </label>
          <input id="telephone" type="integer" defaultValue={420213769} />
        </div>

        {/* Basic Informations */}

        <div>
          <label>Glowna kategoria: </label>
          <input id="cat1_id" type="number" defaultValue={1} />
        </div>
        <div>
          <label>Podkategoria: </label>
          <input id="cat2_id" type="number" defaultValue={2} />
        </div>
        <div>
          <label>Kategoria trzeciego rzedu: </label>
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
          <label>rodzaj ogloszenia</label>
          <input id="ad_type" type="integer" defaultValue={1} />
        </div>
        <div>
          <label>Tytul ogloszenia: </label>
          <input id="title" type="string" min={5} />
        </div>
        <div id="divDescription">
          <label id="labelDescription">opis ogloszenia: </label>
          <textarea id="description" max={4000}></textarea>
        </div>
        <div>
          <label>Cena</label>
          <input id="price" type="integer" />
        </div>

        <div>
          <label>Zdjecie: </label>
          <input type="file"></input>
        </div>

        <button type="submit">Wyslij</button>
      </form>
    </div>
  );
}

export default App;
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
