import React from 'react';
import Lottie from 'react-lottie';
import './Dog.css';
import animationDog from './DogData.json';
const Dog = ({ history }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationDog,
    };
    function handleOnClick() {
        history.push('/chat');
    }

    return (
        <div onClick={handleOnClick} className='dog-conteiner'>
            <Lottie height={300} options={defaultOptions} />
        </div>
    );
};

export default Dog;
