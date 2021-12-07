import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animacaoJSON from './24454-404.json';
import './style.scss';

export const Animacao404 = () => {

    const [animacao, setAnimacao] = useState({});

    useEffect(() => {
        setAnimacao({isStopped: false, isPaused: false})
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animacaoJSON,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <div>
            <Lottie 
                options={defaultOptions} 
                maxHeight={400}
                maxWidth={400}
                isStopped={animacao.isStopped}
                isPaused={animacao.isPaused} 
            />
        </div>
    )
}
