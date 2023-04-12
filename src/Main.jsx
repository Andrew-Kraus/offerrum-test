import React, { useState } from 'react'
import Modal from './components/Modal';

const Main = () => {
    const [modal, setModal] = useState(false);
    return (
        <section className='main'>
            <div className='main__text-container'>
                <h1 className='main__text-title'>Не упусти возможность войти в <span className='main__text-title-span'>прибыльную нишу</span></h1>
                <p className='main__text'>Получи все нужные навыки для заработка на NFT всего за 28 дней!</p>
                <button className='main__text-button' onClick={() => setModal(true)}>Начать зарабатывать на NFT</button>
                <img className='main__man' src='man.png'></img>
                <div className='main__sphere-blur'></div>
            </div>
            <div className='main__sphere'></div>
            {modal ? <Modal setModal={setModal} /> : ''}
        </section>
    )
}

export default Main