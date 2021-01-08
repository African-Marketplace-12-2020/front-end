import React from 'react';
import { motion } from 'framer-motion';

const containerStyle = {
    position: "relative", 
    width: "5rem", 
    height: "5rem", 
    marginLeft: 'auto', 
    marginRight: 'auto',
    display: 'flex',
    justifyContent: 'center'
}

const circleStyle = {
    display: "flex",
    justifyContent: 'center',
    alignContent: 'center',
    width: "5rem", 
    height: "5rem",
    border: "0.5rem solid #77925f",
    borderTop: "0.5rem solid #000",
    borderRadius: "50%",
    boxSizing: "border-box",
    top: 0, 
    left: '5rem',
    textAlign: 'center'
}

const spinTransition = {
    loop: Infinity,
    duration: 1, 
    ease: "linear"
}

export default function CircleLoader() {
    return (
        <div style={containerStyle}>
            <motion.span
                style={circleStyle}
                animate={{ rotate: 360 }}
                transition={spinTransition}
            />
        </div>
    )
}