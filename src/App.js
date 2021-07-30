import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import axios from "axios";
import Photo from "./components/Photo";

function App() {
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://api.nasa.gov/planetary/apod?api_key=SVQ4AsKuwGupQQs4gluvYkYJMWdfJCEQOTXNnaaK"
      )

      .then((res) => {
        setPhoto(res.data);
      })

      .catch((err) => {
        console.log(err, "something went wrong");
      });
  }, []);

  if (!photo) return <h3>loading...</h3>;

  return (
    <div className = "App">
      <div >
        <Header />
        <Photo photo={photo} />
      </div>
    </div>
  );
}

export default App;
