import React, {Component} from 'react';
import './scrapper.css';
import ScrapeResults from "./ScrapeResults";
import ScrapperForm from './ScrapperForm';
import request from "../../utils/request";
import ScrapeResultItem from "./ScrapeResultItem";

class ScrapperContainer extends Component {
    constructor(props){
        super(props);
        this.state = {results : []}
    }
    submitScrapper = async(url, query) => {
        const resp = await request.post('scrape', {url:url,query:query});
        console.log(resp);
        this.setState({results:resp});
    };
    render(){
        const {results} = this.state;
        return (
            <div className="flexbox-column-fill h-fill m-t-15 flex-start-center">
                <ScrapperForm onSubmit={this.submitScrapper}/>
                <ScrapeResults>
                    {/*{results.map((result, key) => <ScrapeResultItem key={key} result={result}/>)}*/}
                </ScrapeResults>
            </div>
        )
    }
}

export default ScrapperContainer;