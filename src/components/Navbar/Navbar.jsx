import "../Navbar/navbar.css";
import logo from "../../../public/Logo.svg";
import hoverEffect from "../../../public/menuHoverEffect.svg";
import IconComponent from "../IconComponent/IconComponent";
import { BiLogoFacebook, BiLogoTelegram, BiLogoTwitter } from "react-icons/bi";
import { GiSailboat, GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";

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
  const [isClick, setIsClick] = useState(false);

  return (
    <nav className="border border-light border-1 text-white customPadding">
      <div className="d-none d-sm-flex ">
        <div className="col-8">
          <div className="row border-end position-relative">
            <div className="col-xl-2 col-4">
              <img
                src={logo}
                alt="logo"
                className="img-fluid imageWidth position-absolute top-100 translate-middle"
              ></img>
            </div>
            <div className="col-md-10 col-8 d-flex justify-content-evenly paddingMenu">
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
        <div className="col-4 d-flex justify-content-start align-self-center NavbarIconBox">
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
      {/* Responsive Navbar */}
      <div className="d-block d-sm-none">
        <div className="w-100 d-flex align-items-center justify-content-between position-relative">
          <img src={logo} alt="logo" className="img-fluid imageWidth"></img>
          {!isClick ? (
            <GiHamburgerMenu
              className="text-lg"
              onClick={() => setIsClick(!isClick)}
            ></GiHamburgerMenu>
          ) : (
            <GrClose
              className="bg-white"
              onClick={() => setIsClick(!isClick)}
            />
          )}
        </div>

        {/* After click Hamburger */}
        {isClick && (
          <div className="w-100 border text-center p-3 mt-3 bg-black ">
            <div className="py-4">
              <img
                src={logo}
                alt="logo"
                className=" img-fluid imageWidth"
              ></img>
            </div>
            <div className="d-flex flex-column ">
              <a className="border-bottom py-3 text-decoration-none text-white ">
                Home
              </a>
              <a className="border-bottom py-3 text-decoration-none text-white">
                Back Story
              </a>
              <a className="border-bottom py-3 text-decoration-none text-white">
                Roadmap
              </a>
              <a className="border-bottom py-3 text-decoration-none text-white">
                Team
              </a>
              <a className="border-bottom py-3 text-decoration-none text-white">
                FAQ
              </a>
            </div>
            <div className="d-flex justify-content-evenly align-self-center py-5">
              <IconComponent
                fill={"black"}
                icon={<GiSailboat />}
              ></IconComponent>
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
        )}
      </div>
    </nav>
  );
}
