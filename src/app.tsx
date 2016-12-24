import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MainComponent} from './components/main.component'

var App = function () { 
    return (React.createElement("div", null,
        React.createElement(MainComponent)
    ));
};

ReactDOM.render(<App />, document.getElementById('react-bootstrap'));
