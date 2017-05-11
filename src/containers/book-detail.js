import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
    render() {
        if (!this.props.book) {
            return (<div>Select a book to get started.</div>);
        }

        return (
            <div>
                <h3>Details for:</h3>
                <div>Title: {this.props.book.title}</div>
                <div>Pages: {this.props.book.pages}</div>
            </div>
        );
    };
}

//take our application state to props
function mapStateToProps(state) {
    // Whatever is returned will show up as props
    // Inside of BookDetail
    return {
        book: state.activeBook
    };
}

// Glue the component and the stateToProps
export default connect(mapStateToProps)(BookDetail);