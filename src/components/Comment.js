import React, { PureComponent } from 'react';
import IconButton from 'material-ui/IconButton';
import './Comment.css';
import ModeEdit from 'material-ui/svg-icons/editor/mode-edit';
import Delete from 'material-ui/svg-icons/action/delete';
import {grey200} from 'material-ui/styles/colors';

export default class Comment extends PureComponent {
    render() {

        const setAction = this.props.setAction;

        return (
            <div className="comment">
                <div className="data">
                    <div className="title">{ this.props.data.email } </div>
                    <div className="text">{ this.props.data.comment } </div>
                </div>

                <IconButton onClick={() => setAction('delete', this.props.data.id)}> <Delete color={grey200} /> </IconButton>
                <IconButton onClick={() => setAction('edit', this.props.data.id)}> <ModeEdit color={grey200}/> </IconButton>

            </div>
        );
    }
}

