import React from 'react'

import './One.css'
const One = () => {
    return (
        <div className='one wrapper'>
                <div className= "eyes-container">
                    <div className="eye left">
                        <div className='eyeball'>
                            <div className="iris-container">
                                <div className='iris'></div>
                            </div>
                        </div>
                        <div className='nose'></div>
                    </div> 
                    <div className="eye right">
                        <div className='eyeball'>
                            <div className="iris-container">
                                <div className='iris'></div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default One
