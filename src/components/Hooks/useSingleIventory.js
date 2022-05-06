import { useEffect, useState } from 'react';

const useSingleIventory = (itemId) => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        const url = `http://localhost:5000/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [itemId])

    return [item, setItem];
};

export default useSingleIventory;