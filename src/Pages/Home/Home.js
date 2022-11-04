import './Home.css';
import {Hero, NewCollection, Products} from '../../sections/index';
const Home = () => {

    return(
        <div>
            <Hero />
            <NewCollection />
            <Products />
        </div>
    );

}
export default Home;