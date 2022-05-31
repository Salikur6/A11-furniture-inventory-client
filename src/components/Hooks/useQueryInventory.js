import { useQuery } from "react-query";
import Spinner from "../../Hooks/Spinner";

const useQueryInventory = () => {


    const { data: products, isLoading, refetch } = useQuery('products2', () => fetch('https://still-chamber-50520.herokuapp.com/inventory').then(res => res.json()))

    // console.log(products)
    // spin if product not loaded
    if (isLoading) {
        return <Spinner></Spinner>
    }


    // products
    return { products, refetch }
};

export default useQueryInventory;