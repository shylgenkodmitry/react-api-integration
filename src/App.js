import React, {Component} from 'react'
import SearchForm from "./SearchForm"
import SearchResult from "./SearchResult";

class App extends Component {
    state = {
        data: [],
    };

    startSearching = data => {
        const { keyword } = data;

        const url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + keyword + '&format=json&origin=*';

        fetch(url)
            .then(result => result.json())
            .then(result => {
                this.setState({
                    data: result,
                })
            })
    };

    render() {
        const { data } = this.state;

        return (
            <div className="container">
                <SearchForm startSearching={this.startSearching} />
                <SearchResult data={data} />
            </div>
        )
    }
}

export default App