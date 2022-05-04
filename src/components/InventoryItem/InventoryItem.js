import React from 'react';
import { useParams } from 'react-router-dom';
import useInventory from '../Hooks/useInventory';

const InventoryItem = () => {
    const [products] = useInventory();
    const { itemId } = useParams();
    console.log(itemId);
    return (
        <div>
            <h1>id: {itemId}</h1>
            <h1>{products.length}</h1>
        </div>
    );
};

export default InventoryItem;