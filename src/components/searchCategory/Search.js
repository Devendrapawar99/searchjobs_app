import React from 'react';
import './SearchStyles.css';
import { Link } from 'react-router-dom';

const Search = () => {
    return (
        <>
            <div className="inputsItems">
                <div className="in">
                    <input type="text" placeholder='Keyword' className='int' />

                    <input list="browsers" name="browser" id="browser" placeholder='Category' className='int' />
                    <datalist id="browsers">
                        <option value="Engineering" />
                        <option value="Marketing" />
                        <option value="Non-Technical" />
                    </datalist>

                    <input type='text' placeholder='Location' className='int' />

                    <Link className='sea'>Search</Link>
                </div>
            </div>
        </>
    );
};

export default Search;