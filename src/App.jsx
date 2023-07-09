import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [mainCategory, setMainCategory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [subCategory, setSubCategory] = useState([]);
  const [thirdRowCategory, setThirdRowCategory] = useState(0);

  const apiKey = "BDc4JU6zygD3NDiV31ifniVDHoCClu5c";
  const urlCats = "http://localhost:3000/api/categories";
  //const urlCities = "http://localhost:3000/api/cities"
  const options = {
    method: "GET",
    headers: {
      "API-Key": apiKey,
    },
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(urlCats, options);
      const data = await res.json();
      // setMainCategory(data);
      setMainCategory(data.data.categories["Nauka i książki"].cat1_id)
      setSubCategory(data.data.categories["Nauka i książki"].subcategories["Książki i podręczniki"].cat2_id)
      setIsLoaded(true)
    };

    fetchAPI().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(mainCategory.categories.Praca)

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!isLoaded) {
    return <div>Loading...</div>
    
  } else {
    console.log(mainCategory)
    console.log(subCategory)

    return (
      <div className="page">
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
          <label>Glowna kategoria: </label>
          <input id="cat1_id" type="number" defaultValue={mainCategory}/>
        </div>
        <div>
          <label>podkategoria: </label>
          <input id="cat1_id" type="number" defaultValue={subCategory}/>
        </div>
        <div>
          <label>miasto: </label>
          <input id="city_id" type="number" defaultValue={14}/>
        </div>
        <div>
          <label>rodzaj ogloszenia: </label>
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
          <label>Pierwsze zdjecie: </label>
          <input type='file'></input>
        </div>


        <button type="submit">Wyslij</button>
      </form>
    </div>
       </div>
    );
  }

  
}

export default App;
