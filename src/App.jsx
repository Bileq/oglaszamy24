import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [mainCategory, setMainCategory] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [subCategory, setSubCategory] = useState(0);
  const [thirdRowCategory, setThirdRowCategory] = useState(0);

  const apiKey = "BDc4JU6zygD3NDiV31ifniVDHoCClu5c";
  const url = "http://localhost:3000/api/categories";
  const options = {
    method: "GET",
    headers: {
      "API-Key": apiKey,
    },
  };

  useEffect(() => {
    const fetchAPI = async () => {
      const res = await fetch(url, options);
      const data = await res.json();
      // setMainCategory(Object.values(data.data));
      setMainCategory(data.data)
      setIsLoaded(true)
    };

    fetchAPI().catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(mainCategory.categories.Praca)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // };

  if (!isLoaded) {
    return <div>Loading...</div>
    
  } else {
    console.log(mainCategory.categories)

    return (
      <div className="page">
        <ul>
          {
            Object.keys(mainCategory.categories).map(category => (
            <li key={category}>
             {category}
            </li>
           ))}
         </ul>
       </div>
    );
  }

  
}

export default App;
