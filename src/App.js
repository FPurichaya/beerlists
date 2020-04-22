import React, { Fragment } from 'react';
import Media from 'react-media';
import Desktop from './Desktop';
import Tablet from './Tablet';
import Mobile from './Mobile';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Media queries={{
          small: "(max-width: 599px)",
          medium: "(min-width: 600px) and (max-width: 1199px)",
          large: "(min-width: 1200px)"
        }}>
          {matches => (
            <Fragment>
              {matches.small && <p><Mobile /></p>}
              {matches.medium && <p><Tablet /></p>}
              {matches.large && <p><Desktop /></p>}
            </Fragment>
          )}
        </Media>
      </div>
    );
  }
}



export default App;
