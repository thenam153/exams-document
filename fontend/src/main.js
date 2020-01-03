import React from 'react';
const containerElem = document.getElementById('react-app');
import ReactDOM from 'react-dom';
import Test, {a} from './views/test';
ReactDOM.render((
    <div style={{width: "100px", height: "100px", background: "red"}}>
        lorem lorem lorem lorem lorem lorem lorem {a}
        <Test name="Nam"/>
    </div>
), containerElem);