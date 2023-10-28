import '../HeroSection/HeroSection.css'
import fractal1 from "../../../public/Fractals1.svg";
import fractal4 from "../../../public/Fractals4.svg";
import CustomButton from '../Button/CustomButton';
import { BiLogoTelegram } from 'react-icons/bi';

export default function HeroSection() {
  return (
    <div className="text-white row justify-content-center border-bottom">
        <div className="col d-flex justify-content-end ">
            <div className="textBox ">
                <h1>1000 Unique Fractals are<br/> ready to launch</h1>
                <p>Manipulation Of The Physical</p>
                <div>
                {/* buttonFill,iconFill,icon */}
                {/* we have to give a Icon color as Props */}
                    <CustomButton buttonFill={'#3B629C'} iconFill={'white'} icon={<BiLogoTelegram className='iconColor'/>} text={'Join Telegram'} ></CustomButton>
                </div>
            </div>
        </div>
        <div className='col'>
        <div className=" position-relative mt-5">
            <div className='imageBox position-absolute z-2 backGroundShadow'>
            </div>
            <img src={fractal1} alt='Hero1' className='position-absolute z-1 img-fluid heroImg1'></img>
            <img src={fractal4} alt='Hero4' className='position-absolute z-0 img-fluid heroImg2'></img>
        </div>
        </div>
    </div>
  )
}
