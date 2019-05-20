import React, { Component } from 'react'

class SearchResult extends Component {

    render() {
        const { data } = this.props;

        const result = data.map((entry, index) => {
            return <li key={index}>{entry}</li>
        });

        return (
            <ul>{result}</ul>
        )
    }
}

export default SearchResult