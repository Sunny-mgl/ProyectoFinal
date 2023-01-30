import React from 'react';
import '../style/style.css'

const LoadingScreen = () => {
    return (
        <div className='overlay'>
            <div className="lds-circle"><div></div></div>
        </div>
    );
};

export default LoadingScreen;