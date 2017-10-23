import React, { PureComponent } from 'react';
import './CommentsList.css';
import Comment from './Comment';
import {connect} from 'react-redux';
import {setAction} from '../actions'

class CommentsList extends PureComponent {
    render() {
        const comments = this.props.list;

        if (!comments)
            return 'loading...';

        return (
            <div className="comments-list">
                { comments.map((data)=> <Comment key={data.id} data ={data} setAction={this.props.setAction}/>) }
            </div>
        );
    }
}

const mapStateToProps = ({list}) => {
    return {
        list
    };
};

export default connect(mapStateToProps, {setAction})(CommentsList);

