import React, { useState } from 'react'

const Header = () => {
    const [modal, setModal] = useState(false);
    function changeModal() {
        if (!modal) {
            setModal(true)
        } else {
            setModal(false)
        }
    }
    return (
        <header className='header'>
            <div className={!modal ? 'header__logo-container' : 'header__logo-container header__modal-active-logo' }>
                <div className='header__logo-icon'></div>
                <p className='header__logo'>NFT</p>
            </div>
            <div className='header__buttons-container'>
                <div className='header__buttons-nav'>
                    <p className='header__buttons'>Главная</p>
                    <a className='header__buttons' href='#info'>Что даст обучение</a>
                </div>
                <button className='header__cabinet'>Личный кабинет</button>
            </div>
            <img className={!modal ? 'header__mobile-menu' : 'header__mobile-menu header__modal-active-close'} src={!modal ? 'mobile-menu.png' : 'close.png'} alt='menu' onClick={() => changeModal()} />
            {modal ? <div className='header__modal'>
                <div className='header__buttons-nav'>
                    <p className='header__buttons'>Главная</p>
                    <a className='header__buttons' href='#info'>Что даст обучение</a>
                </div>
                <button className='header__cabinet'>Личный кабинет</button>
            </div>
                : ''
            }
        </header>
    )
}

export default Header