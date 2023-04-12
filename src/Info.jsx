import React from 'react'
import Card from './components/Card'

const cards = [
    { img: 'emoji-stars.png', text: 'Откроешь свой первый криптокошелек и научишься с ним работать'},
    { img: 'emoji-tongue.png', text: 'Поймёшь, как выбирать правильные дропы'},
    { img: 'emoji-money.png', text: 'Построишь план по быстрому приумножению заработанных средств'},
    { img: 'emoji-glasses.png', text: 'Узнаешь кто такие холдеры и флипперы'},
]

const Info = () => {
    return (
        <section className='info' id='info'>
            <div className='info__container'>
                <div className='info__container-text'>
                    <h2 className='info__title'>Что даст тебе обучение?</h2>
                    <div className='info__grid'>
                        {cards.map((item, index) => {
                            return <Card img={item.img} text={item.text} key={index} />
                        })}
                    </div>
                </div>
                <div className='info__sphere-bg info__sphere-top'></div>
                <div className='info__sphere-bg info__sphere-bot'></div>
                <div className='info__sphere-blue'></div>
                <div className='info__sphere-purple'></div>
                <div className='info__sphere-blur'></div>
            </div>
        </section>
    )
}

export default Info