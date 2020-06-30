import React from 'react';
import './DogItem.css';
import dogAvatar from '../../../assets/images/dog.gif';
import Fade from 'react-reveal/Fade';
const DogItem = ({ text }) => {
    return (
        <div className='dog-item-container'>
            <Fade left>
                <img src={dogAvatar} alt='' />
            </Fade>
            <div className='dog-item-messages'>
                {text.map((t, index) => (
                    <Fade left>
                        <label key={index}> {t}</label>
                    </Fade>
                ))}
            </div>
        </div>
    );
};

export default DogItem;
