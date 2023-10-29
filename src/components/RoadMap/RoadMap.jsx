import "../RoadMap/RoadMap.css";
import OrderListIcon from "./OrderListIcon";
import Fractals5 from "/Fractals5.svg";
import Group9 from "/Group9.svg";

export default function RoadMap() {
  return (
    <div className="text-white">
      <div className="py-5 text-center border-bottom">
        <h1>Roadmap</h1>
      </div>
      <div className="d-block d-sm-flex my-5 RoadMapBox">
        {/* Future 1 Section  */}
        <div className="col d-flex justify-content-sm-center align-items-center position-relative py-3 py-sm-0">
          <div className="">
            <h2>FUTURE I</h2>
            <p>
              <OrderListIcon /> BUILD 1000 NFT ART COLLECTION
            </p>
            <p>
              <OrderListIcon /> BUILD BRAND
            </p>
            <p>
              <OrderListIcon /> BUILD COMMUNITY
            </p>
            <p>
              <OrderListIcon /> LAUNCH 1ST COLLECTION ON 28TH OCT 2023
            </p>
            <p>
              <OrderListIcon /> HOLDERS RECEIVE FREE MINTS &<br /> AIRDROPS IN
              OTHER FUTURES
            </p>
          </div>
          <svg
            className="position-absolute future1Svg d-none d-sm-block"
            xmlns="http://www.w3.org/2000/svg"
            width="158"
            height="61"
            viewBox="0 0 158 61"
            fill="none"
          >
            <path d="M0.16095 0.911621H98.057L157.563 60.4171" stroke="white" />
          </svg>
        </div>

        {/* Image Section */}

        <div className="col text-white text-center">
          <div className="largeCircleRoadMap d-none d-sm-block position-relative  justify-content-center align-items-center overflow-hidden">
            <img src={Group9} alt="Fractal RoadMap" className="TextImage"></img>
            <div className="smallCircleRoadMap z-0">
              <img src={Fractals5} alt="hero5" className="z-1 hero5"></img>
            </div>
          </div>
          <div className="d-none d-sm-block my-5">
            <h2>FUTURE I I I</h2>
            <p>
              <OrderListIcon /> BUILD MEMECOIN AND AIRDROP IT TO ALL HOLDERS
            </p>
          </div>
        </div>

        {/* Future 2 section */}
        <div className="col d-flex justify-content-sm-center align-items-center py-3 py-sm-0">
          <svg
            className="future2 d-none d-sm-block"
            xmlns="http://www.w3.org/2000/svg"
            width="161"
            height="61"
            viewBox="0 0 161 61"
            fill="none"
          >
            <path
              d="M160.736 0.911621H61.2174L0.725613 60.4171"
              stroke="white"
            />
          </svg>
          <div className="">
            <h2>FUTURE I I</h2>
            <p>
              <OrderListIcon /> BUILD SECOND 3000 NFT ART COLLECTION
            </p>
            <p>
              <OrderListIcon /> GIVE FREE MINTS TO FRACTAL HOLDERS
            </p>
            <p>
              <OrderListIcon /> GROW COMMUNITY WITH PARTNERSHIPS
            </p>
          </div>
        </div>

{/* Image section for mobile device */}
<div className="py-3 py-sm-0 largeCircleRoadMap d-block d-sm-none   justify-content-center align-items-center overflow-hidden mx-auto">
          <img src={Fractals5} alt="hero5" className="hero5"></img>
        </div>

        <div className="d-block d-sm-none my-sm-5 py-3 py-sm-0">
          <h2>FUTURE I I I</h2>
          <p>
            <OrderListIcon /> BUILD MEMECOIN AND AIRDROP IT TO<br/> ALL HOLDERS
          </p>
        </div>

      </div>
    </div>
  );
}
