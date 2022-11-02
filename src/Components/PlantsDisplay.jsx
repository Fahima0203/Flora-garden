import axios from "axios";
import { useState, useEffect, React } from "react";
import "./card.scss"
import Nbar from './Navbar.jsx'
import Form from 'react-bootstrap/Form';
import { axiosInstance } from "../config";

function PlantsDisplay() {
  const [data, setData] = useState([]);
  //const [query, setQuery] = useState("");
  useEffect(() => {
    axiosInstance
      .get("http://localhost:5001/fetch")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  // const search = (data) =>{
  //   return data.filter((singleData) => singleData.plantName.toLowerCase().includes(query));
  // }
  return (
    <>
      <Nbar />
      <br></br>

      <form className="d-flex" action="https://www.google.com/search" style={{ margin: "50px 25% 50px 25%", maxWidth: 400, align: "center" }} >
        <Form.Control
          type="search"
          name="q"
          id="search"
          placeholder="search..."
          className="me-2"
          aria-label="Search"
        //onChange={(e) => setQuery(e.target.value)}
        />
        <button class="btn btn-success"  >Search</button>
      </form>

      <div className="wrapper" >
        {/* {useEffect.filter((singleData) => singleData.plantName.toLowerCase().includes(data)).map((singleData) => ( */}
        {
          data.map((singleData) => {
            const base64data = singleData.image;
            console.log("image's binary value : ", base64data)

            return <>
              <div >
                <Card
                  img={singleData.image}
                  title={singleData.plantName}
                  description={singleData.desc}
                //data={search()}
                />
              </div>
            </>
          }
          )
        }
        {/* ))} */}
      </div>
    </>
  );
}

function Card(props) {
  return (
    <>


      <div className="card" >
        <div className="card__body">
          <img src={props.img} alt="plant_image" class="card__image" />
          <h2 className="card__title">{props.title}</h2>
          <p className="card__description" style={{ height: "120px" }}>{props.description}</p>
        </div>
        <a href="https://plantlust.com/search/#/raw=tulip"> <button className="card__btn" >For More Info</button> </a>
      </div>
    </>
  );
}

export default PlantsDisplay
