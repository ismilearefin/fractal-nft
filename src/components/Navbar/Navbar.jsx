import "../Navbar/navbar.css";
import logo from "../../../public/Logo.svg";
import hoverEffect from "../../../public/menuHoverEffect.svg";
import IconComponent from "../IconComponent/IconComponent";
import { BiLogoFacebook, BiLogoTelegram, BiLogoTwitter } from "react-icons/bi";
import { GiSailboat } from "react-icons/gi";


const menuItems = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "Back Story",
  },
  {
    id: 3,
    name: "Roadmap",
  },
  {
    id: 4,
    name: "Team",
  },
  {
    id: 5,
    name: "FAQ",
  },
];

export default function Navbar() {
  return (
    <nav className="border border-light border-2 text-white customPadding">
      <div className="row ">
        <div className="col-sm-8">
          <div className="row border-end position-relative">
            <div className="col-4">
              <img
                src={logo}
                alt="logo"
                className="img-fluid imageWidth position-absolute top-100 translate-middle"
              ></img>
            </div>
            <div className="col-8 d-flex justify-content-evenly paddingMenu">
              {menuItems.map((item) => (
                <div key={item.id} className="ms-3 text-container">
                  <a className="text-white text-decoration-none ">
                    {item.name}
                  </a>
                  <img
                    src={hoverEffect}
                    alt="hover"
                    className="backgroundImg"
                  ></img>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-sm-4 d-flex justify-content-start align-self-center NavbarIconBox">
          <IconComponent fill={"black"} icon={<GiSailboat />}></IconComponent>
          <IconComponent
            fill={"black"}
            icon={<BiLogoTwitter />}
          ></IconComponent>
          <IconComponent
            fill={"black"}
            icon={<BiLogoTelegram />}
          ></IconComponent>
          <IconComponent
            fill={"black"}
            icon={<BiLogoFacebook />}
          ></IconComponent>
        </div>
      </div>
    </nav>
  );
}
