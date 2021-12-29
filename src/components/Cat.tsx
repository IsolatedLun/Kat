import React from 'react';
import { Link } from 'react-router-dom';
import { BreedPreview } from '../features/consts/interfaces';

const Cat = ({ cat } : { cat: BreedPreview }) => {
    const hasImg = cat.image ? true : false;

    return (
        <Link to={`breeds/${cat.id}`}>
            <div className={`cat ${hasImg ? '_' : 'show'}`}>

                <div className="cat-img">
                    <img src={hasImg ? cat.image.url : 'null'} alt={`${cat.name} breed image`} />
                </div>
                
                <p className="cat-name title">{cat.name}</p>

            </div>
        </Link>
    )
}


export default Cat
