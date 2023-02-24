//library import
import { useParams } from "react-router-dom"

//component import
import Title from "../components/title/Title";

const ProductsPages = () => {
    const params = useParams()

    return ( 
        <Title title ={params.productname} pageName='Products'/>
     );
}
 
export default ProductsPages;