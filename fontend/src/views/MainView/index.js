import React from 'react';
import './style.less';
import MainContent from '../../components/MainContent';
import Nav from '../../components/Nav';
import VTree from '../../components/VTree';

class MainView extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="MainView">
                <Nav></Nav>
                <div style={{display: "flex"}}>
                    <VTree></VTree>
                    <MainContent></MainContent>
                </div>
            </div>
        );
    }
} 
export default MainView;