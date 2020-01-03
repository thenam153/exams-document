import React from 'react';
import './main.less';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.click = this.click.bind(this);
        this.state = {
            show: "ok"
        }
    }
    click(val) {
        console.log(val + " ######$#");
        // return function() {
        //     console.log("Hello");
        // }
    }

    render() {
        return (
            <div onClick={() => this.click()}>
                asdaaaaaaaaaaaa {this.props.name}
            </div>
        );
    }
} 
export default Test;
const a = 0;
export {a}