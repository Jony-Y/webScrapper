import React, {Component} from 'react';
import './app.css';
import Header from "../../components/header/Header";
import ScrapperContainer from "../scrapper";

class App extends Component {
    render(){
        return (
            <div className="flexbox-column-fill h-fill flex-start-center">
                <Header className="secondary">Scrapper</Header>
                <ScrapperContainer/>
            </div>
        )
    }
}

export default App