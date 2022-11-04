import './Products.css';
import {Link} from 'react-router-dom';
import {ProductsCard, SectionHeader, SectionWrapper} from '../../components/index';
import productsData from '../../Data/productsData';
const Products = () => {
    const cards = productsData.slice(0, 6).map((card) => {
        return <ProductsCard  key={card.id} img={card.img} title={card.title} category={card.category} price={card.price} date_added={card.date_added} rate={card.rate} sold={card.sold} colors={card.colors}/>
    });
    return (
        <>
            <SectionWrapper>
                <SectionHeader>Products</SectionHeader>
                <div className='products-items'>
                    {cards}
                </div>
                <Link to="/products" className="btn btn-primary">All Products</Link>
            </SectionWrapper>
        </>
    );
}
export default Products;