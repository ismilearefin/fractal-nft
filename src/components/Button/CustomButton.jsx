/* eslint-disable react/prop-types */
import "../Button/CustomButton.css";
import buttonBoxBorder from "../../../public/buttonBoxBorder.svg";
import IconComponent from "../IconComponent/IconComponent";

export default function CustomButton({ buttonFill, iconFill, icon,text }) {
  return (
    <div className="position-relative ms-2 ">
      <svg
        className="position-absolute"
        width="252"
        height="74"
        viewBox="0 0 252 74"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector 35"
          d="M196.157 0.465454H0.333984V73.4655H237.269L251.334 59.4062V10.7395H206.435L196.157 0.465454Z"
          fill={buttonFill}
        />
      </svg>
      <img src={buttonBoxBorder} alt=""></img>
      <div className="buttonIcon d-flex position-absolute">
        {/* We have to put Icon color with our icon by className*/}
        <IconComponent fill={iconFill} icon={icon}></IconComponent>
        <p>{text}</p>
      </div>
    </div>
  );
}
