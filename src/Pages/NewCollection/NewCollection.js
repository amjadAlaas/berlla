import './NewCollection.css';
import {Card, SectionHeader, SectionWrapper} from '../../components/index';
import newCollectionData from '../../Data/newCollectionData';

const NewCollection = () => {

 
    const cards = newCollectionData.map((card) => {
        return <Card  id={card.id} key={card.id} img={card.img} title={card.title} category={card.category} rate={card.rate} sold={card.sold} price={card.price} item={card}/>
    });

    return (
        <>
            <SectionWrapper>
                <SectionHeader>New Collection</SectionHeader>
                <div className='most-popular-items'>
                    {cards}
                </div>
            </SectionWrapper>
        </>
    );

}
export default NewCollection;