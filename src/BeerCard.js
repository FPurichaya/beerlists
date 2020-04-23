import React from 'react';

class BeerCard extends React.Component {

    render() {
        return (
            <div className="ui card">
                <div className="image">
                    <img src="https://images.punkapi.com/v2/keg.png" alt="Buzz Beer Image" />
                </div>
                <div class="content">
                    <a class="header">Buzz</a>
                    <div class="description">
                    A Real Bitter Experience.
                    </div>
                </div>

            </div>
        )
    }
}

export default BeerCard;
