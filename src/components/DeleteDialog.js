import React, {PureComponent} from 'react';
import Dialog from './Dialog';

import {connect} from 'react-redux';
import {clearAction, deleteComment} from '../actions';

export class EditDialog extends PureComponent {
    render() {

        const { clearAction } = this.props;
        const onDelete = () => this.props.deleteComment(this.props.id);

        const action = {label: "Yes", method: onDelete};
        const cancel = {label: "No", method: clearAction};

        return <Dialog
                    title="Delete"
                    open={this.props.open}
                    action={action}
                    cancel={cancel} >
                </Dialog>;
    }
}


const mapStateToProps = ({action}) => {
    return {
        open: action.action === 'delete',
        id: action.selected
    }
};

export default connect(mapStateToProps, {
    clearAction,
    deleteComment
})(EditDialog);