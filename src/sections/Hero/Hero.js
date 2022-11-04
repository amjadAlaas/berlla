import { PrimaryButton } from '../../components/index';
import './Hero.css';
const Hero = () => {
    return (
        <div className='hero-main'>
            <div className='hero-text'>
                <h5 className='hero-subtitle'>Welcome To Berlla Lagerie</h5>
                <h4 className='hero-title'><em>Browse</em> Our Popular Dresses</h4>
                <PrimaryButton>Browse Now</PrimaryButton>
            </div>
        </div>
    );
}
export default Hero;