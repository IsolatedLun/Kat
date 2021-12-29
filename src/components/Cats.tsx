import React from 'react';
import { BreedPreview } from '../features/consts/interfaces';
import { useAppSelector } from '../hooks';
import Cat from './Cat';
import Loader from './Layout/Loader';

export const Cats = ({ data } : { data: BreedPreview[] }) => {
    const { breed } = useAppSelector(state => state.cats.options);

    return (
        <section className="cats">
            
            {

                data.length > 0
                ?
                data
                .filter((cat: BreedPreview) => 
                    cat.name.toLowerCase().indexOf(breed.toLowerCase()) > -1)
                    .map((cat: BreedPreview) => (
                        <Cat cat={cat} key={cat.id} />
                ))
                : <Loader />

            }

        </section>
    )
}
