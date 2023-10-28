import '../Team/TeamSection.css';
import founder from '../../../public/founder.svg';
import coFounder from '../../../public/coFounder.svg';

export default function TeamSection() {
  return (
    <div className="text-white border-bottom">
        <div className="py-5 text-center border-top border-bottom">
            <h1>fractal team</h1>
        </div>
        <div className="row">
            <div className="col p-5 border-end">
                <div className=' d-flex justify-content-end'>
                    <div className='border p-4 text-center'>
                    <img src={founder} alt='founder' className='img-fluid'></img>
                    <h2>founder</h2>
                    <p className='cardText'>OTC Trader</p>
                    </div>
                </div>
            </div>
            <div className="col p-5">
                <div className=' d-flex justify-content-start'>
                <div className='border p-4 text-center'>
                <img src={coFounder} alt='coFounder' className='img-fluid'></img>
                <h2>Co-founder</h2>
                    <p className='cardText'>Habstracticus</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
