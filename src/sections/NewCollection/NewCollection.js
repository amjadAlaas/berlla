import './NewCollection.css';
import {Card, SectionHeader, SectionWrapper} from '../../components/index';
import newCollectionData from '../../Data/newCollectionData';
import {Link} from 'react-router-dom';

const NewCollection = () => {

 
    const cards = newCollectionData.slice(0, 6).map((card) => {
        return <Card  id={card.id} key={card.id} img={card.img} title={card.title} category={card.category} rate={card.rate} sold={card.sold} item={card} price={card.price}/>
    });

    return (
        <>
            <SectionWrapper>
                <SectionHeader>New Collection</SectionHeader>
                <div className='most-popular-items'>
                    {cards}
                </div>
                <Link to="/new-collection" className='btn btn-primary'>View More...</Link>
            </SectionWrapper>
        </>
    );

}
export default NewCollection;