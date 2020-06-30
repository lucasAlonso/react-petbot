import React from 'react';
import Dog from './components/Dog/Dog';
import './Home.css';
import Fade from 'react-reveal/Fade';

const Home = ({ history }) => {
    return (
        <div className='home-dogbot-container '>
            <div className='home-dogbot-content'>
                <div className='home-dogbot-greeting'>
                    <Dog history={history} />
                    <Fade opposite>
                        <h1>Hola Humano</h1>
                    </Fade>
                    <Fade opposite>
                        <label>¿Queres Charlar?</label>
                        <label>Hace click sobre mi para comenzar :)</label>
                    </Fade>
                </div>
            </div>
        </div>
    );
};

export default Home;
