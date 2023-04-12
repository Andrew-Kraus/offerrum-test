import React from 'react'

const Modal = (props) => {
    return (
        <div className='modal'>
            <div className='modal__container'>
                <form className='modal__form'>
                    <h3 className='modal__title'>Начни прямо сейчас!</h3>
                    <p className='modal__text'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                    <input className='modal__input' placeholder='Ваш email'></input>
                    <button className='main__text-button modal__button' onClick={() => props.setModal(false)}>Оплатить</button>
                </form>
                <img className='modal__close' src='close.png' alt='Закрыть' onClick={() => props.setModal(false)}></img>
                <div className='modal__sphere'></div>
            </div>
        </div>
    )
}

export default Modal