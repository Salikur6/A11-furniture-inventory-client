import { useState, useEffect } from 'react';

const useInventory = () => {
    const [products, setProducts] = useState([]);
    // console.log(products)
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return [products]
};

export default useInventory;