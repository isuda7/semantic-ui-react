import React, {Component} from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';
import 'swiper/css/swiper.min.css';
import './style.css';

class Section01 extends Component {
    render() {
        const swiperParams = {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            threshold: 5,
            speed:300,
            navigation: {
                nextEl: '.main_event_swiper .swiper-button-next',
                prevEl: '.main_event_swiper .swiper-button-prev',
            },
            pagination: {
                el: '.main_event_swiper .swiper-pagination',
                type: 'bullets',
                clickable: true
            },
        }

        return (
            <section className='sec main_event_sec'>
                <h2 className='blind'>Heading2</h2>
                <div className='swiper main_event_swiper'>
                    <Swiper {...swiperParams}>
                        <div>
                            <Link to='' className='main_event_item'>Slide #1</Link>
                        </div>
                        <div>
                            <Link to='' className='main_event_item'>Slide #2</Link>
                        </div>
                        <div>
                            <Link to='' className='main_event_item'>Slide #3</Link>
                        </div>
                        <div>
                            <Link to='' className='main_event_item'>Slide #4</Link>
                        </div>
                        <div>
                            <Link to='' className='main_event_item'>Slide #5</Link>
                        </div>
                    </Swiper>
                    <button type='button' className='swiper-button-prev'></button>
                    <button type='button' className='swiper-button-next'></button>
                    <div className='swiper-pagination'></div>
                </div>
            </section>
        )
    }
}

export default Section01