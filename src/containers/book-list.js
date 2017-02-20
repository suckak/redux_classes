/**
 * Created by Daniel_Gutierrez on 2/20/2017.
 */
import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions/index';

class BookList extends React.Component{
    renderList(){
        return this.props.books.map(book => (
            <li className="list-group-item" key={book.title} onClick={this.props.selectBook.bind(this,book)}>{book.title}</li>
        ));
    }

    render(){
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state){
    return {
        books:state.books
    };
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook:selectBook },dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(BookList);