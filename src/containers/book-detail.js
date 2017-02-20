/**
 * Created by Daniel_Gutierrez on 2/20/2017.
 */
import React from 'react';
import {connect} from 'react-redux';

class BookDetail extends React.Component{

    render(){

        if(!this.props.activeBook){
            return (
                <p>Select a Book</p>
            );
        }

        return (
            <div>
                <h3>Details for:</h3>
                <p>Title: {this.props.activeBook.title}</p>
                <p>Pages: {this.props.activeBook.pages}</p>
            </div>
        );
    }

}

function mapStateToProps({activeBook}){
    return {
        activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);