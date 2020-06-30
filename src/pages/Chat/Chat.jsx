import React, { useState, useEffect } from 'react';
import './Chat.css';
import DogItem from './DogItem/DogItem.jsx';
import UserItem from './UserItem/UserItem.jsx';
import InputChat from './InputChat/InputChat';
import Select from './Select/Select';
import Fade from 'react-reveal/Fade';
import { doing, aboutMe } from '../../data/Actions';

const Chat = () => {
    let idCounter = 0;
    const [msg, setMsg] = useState({});
    const [openSelect, setOpenSelect] = useState(false);
    const [chat, setChat] = useState([
        {
            id: 0,
            emmiter: 'Dog',
            msg: ['Hola', '¿Como es tu nombre?'],
        },
    ]);

    function firstResponse(name) {
        let newChat = {
            id: idCounter + 2,
            emmiter: 'Dog',
            msg: [
                'Mucho gusto, ' + name + '!',
                'Mi nombre es perrito, soy un dogbot en desarrollo',
                'Eso quiere decir que aun no puedo responder directamente',
                'Lo que no significa que no podamos interactuar',
                'Haceme una pregunta de la lista, y con gusto te respondere',
            ],
        };
        if (newChat) {
            setChat([...chat, newChat]);
        }
    }
    useEffect(() => {
        if (chat.length === 2) {
            setTimeout(() => firstResponse(msg.msg), 500);
            setMsg({ ...msg, msg: '' });
            setTimeout(() => setOpenSelect(true), 600);
        }
    }, [chat]);

    function getMeMessage(value) {
        idCounter = idCounter + 1;
        setMsg({
            id: idCounter,
            emmiter: 'User',
            msg: value,
        });
    }

    function sendMessage(e) {
        e.preventDefault();
        setChat([...chat, msg]);
    }

    let options = [
        { id: 'doing', text: 'Que Haces?' },
        { id: 'meme', text: 'Mandame un meme' },
        { id: 'about', text: 'Contame sobre vos' },
    ];

    const [interactions, setInteractions] = useState([]);

    function handleSelectedOptions(value) {
        let result;
        switch (value) {
            case 'doing':
                result = doing[Math.floor(Math.random() * doing.length)];
                if (result) {
                    setInteractions([...interactions, result.msg]);
                }
                break;
            case 'about':
                result = aboutMe[Math.floor(Math.random() * aboutMe.length)];
                if (result) {
                    setInteractions([...interactions, result.msg]);
                }
                break;
            default:
                console.log('No hay valores');
        }
    }
    return (
        <div className='chatbox-chat-container'>
            <div className='chatbot-chat-content'>
                <div className='chatbot-chat'>
                    <div className='chatbot-chat-container-body'>
                        {chat.map((message, index) =>
                            message.emmiter === 'Dog' ? (
                                <DogItem key={index} text={message.msg} />
                            ) : (
                                <UserItem key={index} text={message.msg} />
                            )
                        )}
                        {openSelect && (
                            <Fade right>
                                <Select handleSelectedOptions={handleSelectedOptions} options={options} />
                            </Fade>
                        )}
                        {interactions.length > 0 &&
                            interactions.map((interaction, index) => (
                                <>
                                    <Fade left>
                                        <DogItem key={index} text={interaction}></DogItem>
                                    </Fade>
                                    <Fade right>
                                        <Select
                                            key={index}
                                            handleSelectedOptions={handleSelectedOptions}
                                            options={options}
                                        />
                                    </Fade>
                                </>
                            ))}
                    </div>
                    <div className='chatbot-chat-container-input'>
                        <InputChat chat={chat} msg={msg} getMeMessage={getMeMessage} sendMessage={sendMessage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chat;
