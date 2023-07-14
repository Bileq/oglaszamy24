import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [mainCategory, appendMainCategory] = useState([]);
  const [isLoaded, appendIsLoaded] = useState(false);
  const [subCategory, appendSubCategory] = useState([]);
  const [name, appendName] = useState("Jakub Siębor");
  const [phone, appendPhone] = useState(123456789);
  const [catOne, appendCatOne] = useState(13);
  const [catTwo, appendCatTwo] = useState(80);
  const [catThree, appendCatThree] = useState(0);
  const [city, appendCity] = useState(0);
  const [adType, appendAdType] = useState(1);
  const [title, appendTitle] = useState("Example title");
  const [desc, appendDesc] = useState(
    "This text is an example description that is used to describe the thing that is being sold"
  );
  const [photo, appendPhoto] = useState([]);
  const [prompt, setPrompt] = useState();

  const apiKey = "BDc4JU6zygD3NDiV31ifniVDHoCClu5c";
  const urlCats = "http://localhost:3000/api/categories";
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
      appendMainCategory(data.data.categories["Nauka i książki"].catOne);
      appendSubCategory(
        data.data.categories["Nauka i książki"].subcategories[
          "Książki i podręczniki"
        ].catTwo
      );
      appendIsLoaded(true);
    };

    fetchAPI().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: desc,
      cat1_id: catOne,
      cat2_id: catTwo,
      cat3_id: catThree,
      contact_name: name,
      telephone: phone,
      city_id: city,
      ad_type: adType,
    };


    const requestOptions = {
      method: "POST",
      headers: {
        "API-Key": apiKey,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ data: JSON.stringify(data) }),
    };

    fetch("http://localhost:3000/api/adverts", requestOptions)
    // fetch('https://jsonplaceholder.typicode.com/posts', requestOptions)
      .then((response) => response.json())
      //Send this to a div
      .then(data => {
        console.log(data)
        setPrompt(Object.values(data))
      })
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="page">
        <form onSubmit={handleSubmit} id="form">
          {/* Contact info */}

          <div>
            <label>Imie i nazwisko: </label>
            <input
              required
              value={name}
              id="contact_name"
              type="string"
              onChange={(e) => appendName(e.target.value)}
            />
          </div>
          <div>
            <label>Telefon: </label>
            <input
              required
              value={phone}
              id="telephone"
              type="integer"
              onChange={(e) => appendPhone(e.target.value)}
            />
          </div>

          {/* Basic Informations */}

          <div>
            <label>Glowna kategoria: </label>
            <input
              required
              value={catOne}
              id="cat1_id"
              type="number"
              onChange={(e) => appendCatOne(e.target.value)}
            />
          </div>
          <div>
            <label>Podkategoria: </label>
            <input
              required
              value={catTwo}
              id="cat2_id"
              type="number"
              onChange={(e) => appendCatTwo(e.target.value)}
            />
          </div>
          <div>
            <label>Kategoria trzeciego rzedu: </label>
            <input
              required
              value={catThree}
              id="cat3_id"
              type="number"
              onChange={(e) => appendCatThree(e.target.value)}
            />
          </div>
          <div>
            <label>Miasto: </label>
            <input
              value={city}
              id="city_id"
              type="number"
              onChange={(e) => appendCity(e.target.value)}
            />
          </div>
          <div>
            <label>Rodzaj ogloszenia: </label>
            <input
              required
              value={adType}
              id="ad_type"
              type="integer"
              onChange={(e) => appendAdType(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="title">Tytul ogloszenia: </label>
            <input
              required
              value={title}
              id="title"
              type="string"
              min={5}
              onChange={(e) => appendTitle(e.target.value)}
            />
          </div>
          <div id="divdesc">
            <label id="labeldesc">Opis ogloszenia: </label>
            <textarea
              required
              value={desc}
              id="description"
              max={4000}
              onChange={(e) => appendDesc(e.target.value)}
            ></textarea>
          </div>
          <div>
            <label>Zdjecie: </label>
            <input
              type="file"
              value={photo}
              onChange={(e) => appendPhoto(e.target.value)}
            ></input>
          </div>

          <button type="submit">Wyslij</button>
        </form>
        <div>{prompt && <div id="prompt">{prompt[1]}</div>}</div>
      </div>
    );
  }
}

export default App;
