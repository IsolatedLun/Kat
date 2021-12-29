import React, { useEffect } from 'react'

import Options from './Options';
import { Cats } from './Cats';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useFetchCatsQuery } from '../features/cats-api-slice';

const Home = () => {
    const dispatch = useAppDispatch();
    const { breed, limit } = useAppSelector(state => state.cats.options)
    const { data= [], isFetching= false } = useFetchCatsQuery(limit);

    useEffect(() => {

    }, [])

    return (
        <main className="main-container">
            <Options />
            <Cats data={data} />

        </main>
    )
}

export default Home
