import { useState, useEffect } from 'react';
import Spinner from '../../Hooks/Spinner';

const useInventory = () => {
    const [products, setProducts] = useState([]);
    // const [load, setLoad] = useState(false);
    // console.log(products)

    // inventory items data with spinner
    // console.log(load)

    useEffect(() => {
        fetch('https://still-chamber-50520.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => {
                // console.log(data)

                if (data) {
                    // setLoad(!load)
                    setProducts(data)
                } else {
                    return <Spinner></Spinner>

                }
            })
    }, [])
    // products
    return [products, setProducts]
};

export default useInventory;