import { useEffect, useState } from 'react';
import Spinner from '../../Hooks/Spinner';

const useSingleIventory = (itemId) => {
    const [item, setItem] = useState([]);


    useEffect(() => {
        const url = `https://still-chamber-50520.herokuapp.com/inventory/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setItem(data)
                } else {
                    return <Spinner></Spinner>
                }
            })

    }, [itemId])

    return [item, setItem];
};

export default useSingleIventory;