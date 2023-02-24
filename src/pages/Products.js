import Title from "../components/title/Title";
import ProductCard from "../components/productCard/ProductCard";

//library import
import { v4 as uuidv4 } from 'uuid';

//import data
import products from '../data/Data';

const Products = () => {
    return ( 
        <>
        <div className="flex">
        <Title title="What we have" pageName="Products"/>
            {products.map((product)=>{
                return <ProductCard
                key ={uuidv4()}
                productname = {product.productname}
                productImg = {product.productImg}
                />
            })}
        </div>

        </>
    );
}

export default Products;