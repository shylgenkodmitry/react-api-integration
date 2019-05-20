import React, { Component } from 'react'

class SearchForm extends Component {

    constructor(props) {
        super(props);

        this.initialState = {
            keyword: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    };

    onFormSubmit = event => {
        event.preventDefault();

        if (this.state.keyword) {
            this.props.startSearching(this.state);
        }
    };

    render() {
        const { keyword } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label>Keywords</label>
                <input type="text" name="keyword" value={keyword} onChange={this.handleChange} />

                <button>Search</button>
            </form>
        )
    }
}

export default SearchForm