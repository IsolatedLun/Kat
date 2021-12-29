import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useFetchByBreedQuery } from '../features/cats-api-slice';
import { Breed } from '../features/consts/interfaces';
import { followCursor, prettify, resetCursor } from '../utils';
import Loader from './Layout/Loader';

const Overview = () => {
    const { breedName } = useParams();
    const { data = [], isFetching=true } = useFetchByBreedQuery(breedName);

    return (
        data[0] !== undefined
        ?
        <div className="overview">
            <Link to='/' className='fa btn back-btn capsule'>&#xf060;</Link>
            <div className="desc-part">
                <div className="cat-img">
                    <img width={360} height={360}
                    src={data[0].url} alt={`${data[0].breeds[0].name} breed image`} />
                </div>
                <div className="info">
                    <p className="cat-name title">{data[0].breeds[0].name}</p>
                    <p className="desc">{data[0].breeds[0].description}</p>
                    <div className="extra-info">
                        <p className="origin">Origin: {data[0].breeds[0].origin}</p>
                        <ul className="traits">
                            {
                                data[0].breeds[0].temperament.split(',')
                                    .map((trait: string) => (
                                        <li className='trait'>{trait}</li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <div className="stats">
                {
                    Object.entries(data[0].breeds[0]).map((key, idx) => {
                        if(Number(key[1])) {
                            let custom = {"--amt": key[1]} as React.CSSProperties;
                            return(
                                <div data-idx={idx}
                                className="stat flex-align flex-center flex-col" key={idx}>
                                    <p className='stat-name'>{prettify(key[0])}</p>
                                    
                                    <div onMouseLeave={(e: React.MouseEvent) => resetCursor(e)}
                                    onMouseMove={(e: React.MouseEvent) => followCursor(e)}
                                    className="stat-bar capsule" style={custom}></div>
                                    
                                    <p className="stat-num capsule" 
                                    id={'stat-' + idx}>{key[1]}/5</p>
                                </div>
                            )
                        }
                    })
                }
            </div>

        </div>
        : <Loader />
    )
}

export default Overview
