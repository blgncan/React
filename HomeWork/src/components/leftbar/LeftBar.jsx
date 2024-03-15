import React from 'react';

const LeftBar = () => {

    const cards = [
        { title: 'Left Card 1', text: 'Text for Card 1' },
        { title: 'Left Card 2', text: 'Text for Card 2' },
        { title: 'Left Card 3', text: 'Text for Card 3' }
    ];

    return (
        <div className='left-panel'>

            {cards.map((card, index) => (
                <div key={index} className="card" style={{ marginBottom: "10px" }}>
                    <h5 className="card-header">{card.title}</h5>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">{card.text}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>

                
            ))}
        </div>
    );
}

export default LeftBar;
