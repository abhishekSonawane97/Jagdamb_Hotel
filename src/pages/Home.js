import React from "react";
import Layout from "./../components/Layout/Layout";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css";
import HotelView from "../components/HotelView";
import hotelBoard from "../images/hotelBoard.jpg";
import selfiePoint from "../images/selfiePoint.jpg";
import hotelLights from "../images/hotelLights.jpg";
import counter from "../images/counter.jpg";
import limeLightDining from "../images/limeLightDining.jpg";
import entrance from "../images/entrance.jpg";
import banner from "../images/banner.jpeg";
import banner2 from "../images/banner2.jpeg";
import dineIn from "../images/dineIn.jpg";
import reception from "../images/reception.jpg";
import menuCard from "../images/menuCard.jpg";


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${banner})` }}>
        <div className="headerContainer">
          <h1 style={{ color:"#fff" }}>Food Tour...</h1>
          <p style={{ color:"#fff" }}>Best Food In Chh. Sambhajinagar</p>
          <Link to="/contact">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>

      <div className="advertisement" style={{ display:"flex"}}>
        <HotelView branchName={"शाखा क्रमांक १"} itemData={itemData1}/>
        <HotelView branchName={"शाखा क्रमांक २"} itemData={itemData2}/>
      </div>
    </Layout>
  );
};

export default Home;



const itemData1 = [
  {
    img: hotelBoard,
    title: 'Welcome Branch 1',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: entrance,
    title:  'Hotel Entrance',
    author: '@helloimnik',
  },
  
  {
    img: hotelLights,
    title: 'Spot Lights',
    author: '@nolanissac',
    cols: 2,
  },
  {
    img: selfiePoint,
    title: 'Selfie Point',
    author: '@rollelflex_graphy726',
  },
  {
    img: counter,
    title: 'Indoor Dining Lounge',
    author: '@hjrc33',
    cols: 2,
  },
  {
    img: limeLightDining,
    title: 'Limelight Dining',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
];

const itemData2 = [
  
  {
    img: dineIn,
    title: 'Limelight Dining',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: hotelBoard,
    title: 'Welcome Branch 1',
    author: '@bkristastucchio',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: reception,
    title: 'Reception',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: menuCard,
    title: 'Special Menu',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
    featured: true,
  },

]