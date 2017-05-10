/*just a component for list of books
import React, { Component } from 'react';

export default class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}*/

//to make react and redux together containers needs, because react and redux is two separate libraries,
//a container/smart component has direct connection to redux

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

//take our application state to props
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // Inside of BookList
    return {
        books: state.books
    };
}

//glue the component and the statetoprops
export default connect(mapStateToProps)(BookList);
