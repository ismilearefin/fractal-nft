import '../Footer/Footer.css';
import Logo from '../../../public/Logo.svg';
import CustomButton from '../Button/CustomButton';
import { BiLogoFacebook, BiLogoTelegram, BiLogoTwitter } from "react-icons/bi";
import { GiSailboat } from "react-icons/gi";
import IconComponent from '../IconComponent/IconComponent';

export default function Footer() {
  return (
    <div className='FooterMainBox'>
        <div className='row '>
            <div className='col-5  footerCard1 '>
                <h1 className='pb-4'>join fractal community</h1>
                <p className='text-white pb-4'>Become a member of the strongest and fast growing NFTs Community</p>
                <span>
                <CustomButton buttonFill={'white'} iconFill={'black'} icon={<BiLogoTelegram/>} text={'Join Telegram'}></CustomButton>
                </span>
            </div>
            <div className='col-2 text-center mt-5'>
                <img src={Logo} alt='logo'/>
            </div>
            <div className='col-5  footerCard2 '>
                <h1 className='pb-4'>mint your fractal</h1>
                <p className='text-white pb-5'>
                Mint Your Favourite NFTs
                </p>
                <CustomButton buttonFill={'white'} iconFill={'white'} text={'Mint Is Live'}/>
            </div>
        </div>
        <div className='row bottomFooter text-white'>
            <div className='col-5 footerCard1'>
                <p>ALL RIGHTS RESERVED FRACTAL 2023.</p>
            </div>
            <div className='col-2 d-flex align-items-center justify-content-center FootericonBox'>
                <IconComponent fill={'black'} icon={<GiSailboat></GiSailboat>}></IconComponent>
                <IconComponent fill={'black'} icon={<BiLogoTwitter/>}></IconComponent>
                <IconComponent fill={'black'} icon={<BiLogoTelegram/>}></IconComponent>
                <IconComponent fill={'black'} icon={<BiLogoFacebook/>}></IconComponent>
            </div>
            <div className='col-5 footerCard2'>
                <p>Deisned and Developed By nftConstructer.com</p>
            </div>
        </div>
    </div>
  )
}
