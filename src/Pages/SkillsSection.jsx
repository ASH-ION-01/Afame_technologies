import React, { useState, useEffect } from 'react';
import './Slider.css'; // Assuming you saved your CSS in a file named Slider.css

const SkillsSection = () => {
    const [itemActive, setItemActive] = useState(0);

    // Updated data for each item
    const itemsData = [
        { 
            imageUrl: 'src/assets/01.png',
            title: 'Slider 01 Title',
            para: 'Paragraph for Slider 01',
            blah: 'befkgvebbbbbbbb'
        },
        { 
            imageUrl: 'src/assets/02.png',
            title: 'Slider 02 Title',
            para: 'Paragraph for Slider 02',
            blah: 'behfbkbreuuuuu'
        },
        { 
            imageUrl: 'src/assets/03.png',
            title: 'Slider 03 Title',
            para: 'Paragraph for Slider 03',
            blah: 'befkgvebiiiiiiiii'
        },
        { 
            imageUrl: 'src/assets/04.png',
            title: 'Slider 04 Title',
            para: 'Paragraph for Slider 04',
            blah: 'befkgvebaaaaaaaaaaa'
        },
        { 
            imageUrl: 'src/assets/05.png',
            title: 'Slider 05 Title',
            para: 'Paragraph for Slider 05',
            blah: 'befkgvebcccccccccccc'
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
