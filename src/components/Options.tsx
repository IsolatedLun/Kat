import React, { FormEvent } from 'react'

import { useAppDispatch, useAppSelector } from '../hooks';
import { setOption } from '../features/cat-slice';

const Options = () => {
    const dispatch = useAppDispatch()
    const { limit } = useAppSelector(state => state.cats.options)

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        const val: string = (e.target as HTMLInputElement).value;
        const action: string = (e.target as HTMLInputElement).name;

        dispatch(setOption({ val, action }));
    }

    const reset = () => {
        dispatch(setOption({ val: 10, action: 'limit' }));
        dispatch(setOption({ val: '', action: 'breed' }));

        (document.getElementById('search-inpt') as HTMLInputElement).value = '';
    }

    return (
        <section className="options">
            <div className="opt-part">
                <input type="text" className="search-inpt" name='breed' id='search-inpt'
                placeholder='Search by breed...' onInput={(e) => handleInput(e)} />
            </div>
            <div className="opt-part flex-align flex-center">
                <button className="fa opt-btn capsule" onClick={() => reset()}>&#xf021;</button>
            </div>
            <div className="opt-part flex-align">
                <p className="slider-amt">{limit}</p>
                <input type="range" name="limit" onChange={(e) => handleInput(e)}
                id="limit-slider" className='limit-slider' min={0} step={10} max={50} value={limit} />
            </div>
        </section>
    )
}

export default Options
