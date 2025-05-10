import React, { useState, useEffect } from 'react';
import './Slider.css'; // Assuming you saved your CSS in a file named Slider.css

const SkillsSection = () => {
    const [itemActive, setItemActive] = useState(0);

    // Updated data for each item
    const itemsData = [
  { 
    imageUrl: '/01.png',
    title: 'CareU Healthcare App',
    para: 'A comprehensive React app for symptom-based medication suggestions, doctor search, appointment booking and medicine delivery tracking.',
    blah: '“Empowering health, one click at a time.”'
  },
  { 
    imageUrl: '/02.png',
    title: 'InAct Interactive Map',
    para: 'A real-time mapping solution using Leaflet and Socket.io to animate vessel/navigation pointers between coordinates.',
    blah: '“Bringing data to life through motion.”'
  },
  { 
    imageUrl: '/03.png',
    title: 'Shoptify E-Commerce',
    para: 'An online shopping cart system handling 2,500+ products with integrated payments and seamless UX built in React and Tailwind CSS.',
    blah: '“Shop smarter, not harder.”'
  },
  { 
    imageUrl: '/04.png',
    title: 'Codxo Weather App',
    para: 'A React-based weather forecasting application fetching and displaying live weather data with an intuitive UI.',
    blah: '“Weather at your fingertips.”'
  },
  { 
    imageUrl: '/05.png',
    title: 'Razorpay Clone Gateway',
    para: 'A Node.js & Razorpay powered crypto-to-fiat payment middleware, dynamically converting based on live rates.',
    blah: '“Crypto meets convenience.”'
  },
];


    useEffect(() => {
        const refreshInterval = setInterval(() => {
            setItemActive(prevActive => (prevActive + 1) % itemsData.length);
        }, 5000);

        return () => clearInterval(refreshInterval);
    }, [itemsData.length]);

    const showSlider = (index) => {
        setItemActive(index);
    }

    const nextSlide = () => {
        setItemActive(prevActive => (prevActive + 1) % itemsData.length);
    }

    const prevSlide = () => {
        setItemActive(prevActive => (prevActive === 0 ? itemsData.length - 1 : prevActive - 1));
    }

    return (
        <div className="slider mt-16" id='projects'>
            {/* List Items */}
            <div className="list">
                {itemsData.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`}>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="content">
                            <p>{item.para}</p>
                            <h2>{item.title}</h2>
                            <p>
                                {item.blah}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Button Arrows */}
            <div className="arrows">
                <button id="prev" onClick={prevSlide}>{"<"}</button>
                <button id="next" onClick={nextSlide}>{">"}</button>
            </div>

            {/* Thumbnail */}
            <div className="thumbnail">
                {itemsData.map((item, index) => (
                    <div key={index} className={`item ${index === itemActive ? 'active' : ''}`} onClick={() => showSlider(index)}>
                        <img src={item.imageUrl} alt={item.title} />
                        <div className="content">{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SkillsSection;
