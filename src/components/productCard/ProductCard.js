//Schablone der Productcard

//import 
import { Link } from 'react-router-dom'

const ProductCard = (props) => {
    return ( 
        <article>
            <h3>{props.productname}</h3>
            <img src={props.productImg} alt="" />
            {/* Die Links führen zu den jeweiligen Produkten */}
            <Link to={`/products/${props.productname}`}>Shop Now</Link>
        </article>
    );
}

export default ProductCard;