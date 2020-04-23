import React from 'react';
import Loading from './loading';
import BeerCard from './BeerCard';

class Desktop extends React.Component {
    state = { loading: true };
    render() {
        return (
            <div>
                {this.state.loading ? (
                    <Loading />
                ) : (
                    <div>
                        <header className="ui header">
                            <i class="beer icon"></i>
                            BEER LISTS Desktop 
                        </header>
                        <div><BeerCard /></div>
                    </div>
                    )
                }
            </div>
        );
    }
}


export default Desktop;