import React from 'react';
import ImageSlider from './ImageSlider';
import car1 from './images/auto-elevate.png'
import car2 from './images/auto-fronx.png'
import car3 from './images/auto-jeep.png'
import car4 from './images/auto-sports.png'
import car5 from './images/auto-ghost.png'

const Portfolio = () => {
    const slides = [
        { url: car1, title: "car1" },
        { url: car2, title: "car2" },
        { url: car3, title: "car3" },
        { url: car4, title: "car4" },
        { url: car5, title: "car5" },
        { url: 'https://electrek.co/wp-content/uploads/sites/3/2023/01/Audi-SUV-truck-EV-1.jpeg?quality=82&strip=all', title: "car6" },
        { url: 'https://imgd.aeplcdn.com/370x208/n/cw/ec/142515/elevate-exterior-left-front-three-quarter-4.jpeg?isig=0&q=75', title: "car7" },
    ];

    const containerStyles = {
        width: '500px',
        height: '280px',
        margin: '0 auto',
    };

    return (
        <div>
            <header>
                <h1>MY PORTFOLIO</h1>
                <p>A showcase of my projects.</p>
            </header>

            <main>
                <article>
                    <header>
                        <h2>Automobile Management System</h2>
                    </header>
                    <div style={containerStyles}>
                        <ImageSlider slides={slides} />
                    </div>
                    <p>Donec eget ex magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque venenatis dolor imperdiet dolor mattis sagittis magna etiam.</p>
                </article>
                //... other articles
            </main>
        </div>
    );
};

export default Portfolio;
