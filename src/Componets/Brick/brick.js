import React from 'react'
import './style.css'

//functional based component coz only display nothing to store
    const Brick = (props) => {
        return (
            <div className='brick-container'>
                {props.name}
            </div>
        )
    }

export default Brick;