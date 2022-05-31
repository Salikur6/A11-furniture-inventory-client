// import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Spinner from '../../Hooks/Spinner';

const useSingleIventory = (itemId) => {
    // const [item, setItem] = useState([]);





    const { data: item, isLoading, refetch } = useQuery('singleProduct', () => fetch(`https://still-chamber-50520.herokuapp.com/inventory/${itemId}`).then(res => res.json()))

    // console.log(item)
    // spin if product not loaded
    if (isLoading) {
        return <Spinner></Spinner>
    }


    // products
    return { item, refetch }





    // useEffect(() => {
    //     const url = `https://still-chamber-50520.herokuapp.com/inventory/${itemId}`;
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data) {
    //                 setItem(data)
    //             } else {
    //                 return <Spinner></Spinner>
    //             }
    //         })

    // }, [itemId])

    // return [item, setItem];
};

export default useSingleIventory;