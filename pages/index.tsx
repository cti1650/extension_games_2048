import React from 'react';

const Pages = () => {
    return (
        <div className="relative" style={{ width: 350, height: 560 }}>
            <div className="absolute top-0 left-0">
                <iframe
                    allow="payment"
                    id='frm-child'
                    src='https://play2048.co/'
                    width='350'
                    height='560'
                    className="border-0"
                ></iframe>
            </div>
        </div>
    );
};

export default Pages;
