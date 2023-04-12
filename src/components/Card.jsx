import React from 'react'

const Card = (props) => {
    return (
        <div className='info__card'>
            <div className='info__card-container'>
                <img className='info__card-img' src={props.img} alt='Изображение не загрузилось'></img>
                <p className='info__card-text'>{props.text}</p>
            </div>
            <div className='info__card-copy'></div>
        </div>
    )
}

export default Card