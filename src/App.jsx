import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [mainCategory, setMainCategory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [subCategory, setSubCategory] = useState([]);
  const [name, setName] = useState("Roman Zadymka");
  const [phone, setPhone] = useState(123456789);
  const [catOne, setCatOne] = useState(13);
  const [catTwo, setCatTwo] = useState(80);
  const [catThree, setCatThree] = useState(0);
  const [city, setCity] = useState(0);
  const [adType, setAdType] = useState(1);
  const [title, setTitle] = useState("Lorem Ipsum");
  const [desc, setDesc] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  );
  const [photo, setPhoto] = useState();
  const [prompt, setPrompt] = useState();
  const [adID, setAdId] = useState();
  const [photoPrompt, setPhotoPrompt] = useState();

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
      setMainCategory(data.data.categories["Nauka i książki"].catOne);
      setSubCategory(
        data.data.categories["Nauka i książki"].subcategories[
          "Książki i podręczniki"
        ].catTwo
      );
      setIsLoaded(true);
    };

    fetchAPI().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleImageChange = e => {
    setPhoto(e.target.files[0])
  };

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
      // TODO:
      headers: {
          "API-Key": apiKey,
      },
      body: new URLSearchParams({ data: JSON.stringify(data) }),
    };
    // TODO:
    fetch("http://localhost:3000/api/adverts", requestOptions)
    // fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // TODO:
        setPrompt(Object.values(data))
        setAdId(Object.values(data));
      })
      .catch(err => console.log(err))
  };

  const handleImageUpload = e => {
    e.preventDefault()

      const formData = new FormData();
      formData.append('data', photo)

      const requestOptions = {
        method: "POST",
        headers: {
          "API-Key": apiKey,
        },
        body: formData,
      }

    // fetch(`http://localhost:3000/api/adverts/${adID[1]}/images/upload`, requestOptions)
    // TODO: Correct version :
    fetch(`http://localhost:3000/api/adverts/${adID[2].id}/images/upload`, requestOptions)
    // fetch(`http://localhost:3000/api/adverts/2006238162/images/upload`, requestOptions)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      setPhotoPrompt(Object.values(data))
    })
    .catch(err => console.log(err))


  }


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
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Telefon: </label>
            <input
              required
              value={phone}
              id="telephone"
              type="integer"
              onChange={(e) => setPhone(e.target.value)}
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
              onChange={(e) => setCatOne(e.target.value)}
            />
          </div>
          <div>
            <label>Podkategoria: </label>
            <input
              required
              value={catTwo}
              id="cat2_id"
              type="number"
              onChange={(e) => setCatTwo(e.target.value)}
            />
          </div>
          <div>
            <label>Kategoria trzeciego rzedu: </label>
            <input
              required
              value={catThree}
              id="cat3_id"
              type="number"
              onChange={(e) => setCatThree(e.target.value)}
            />
          </div>
          <div>
            <label>Miasto: </label>
            <input
              value={city}
              id="city_id"
              type="number"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div>
            <label>Rodzaj ogloszenia: </label>
            <input
              required
              value={adType}
              id="ad_type"
              type="integer"
              onChange={(e) => setAdType(e.target.value)}
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
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div id="divdesc">
            <label id="labeldesc">Opis ogloszenia: </label>
            <textarea
              required
              value={desc}
              id="description"
              max={4000}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>
          </div>
          

          <button type="submit" style={{marginTop: "10px"}}>Wyslij</button>
        </form>
        {/* TODO: */}
        <div>{prompt && <div id="prompt">{prompt[1]}</div>}</div>

      {
        adID && 
        <form 
          onSubmit={handleImageUpload} id="photoForm">
          <h3>Dodaj zdjecie do poprzednio wyslanego ogloszenia:</h3>
        <div>
            <label>Zdjecie: </label>
            <input
              type="file"
              accept="image/jpg"
              onChange={handleImageChange}
            ></input>
          </div>
          <button type="submit" style={{marginTop: "20px"}}>Wyslij zdjecie</button>
        </form>
      }

      <div>{photoPrompt && <div id="photoPrompt">{photoPrompt[1]}</div>}</div>
      </div>
    );
  }
}

export default App;
