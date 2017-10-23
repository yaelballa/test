import React, {PureComponent} from 'react';
import Dialog from './Dialog';
import TextField from 'material-ui/TextField';

import {connect} from 'react-redux';
import {clearAction, editComment} from '../actions';

export class EditDialog extends PureComponent {
    render() {

        const { clearAction } = this.props;
        const onSave = () => this.props.editComment(this.props.id, this.refs.text.getValue());

        const action = {label: "Save", method: onSave};
        const cancel = {label: "Cancel", method: clearAction};

        return <Dialog
            title="Edit"
            open={this.props.open}
            action={action}
            cancel={cancel} >
            <TextField id="text" ref="text"/>
        </Dialog>;
    }
}


const mapStateToProps = ({action}) => {
    return {
        open: action.action === 'edit',
        id: action.selected
    }
};

export default connect(mapStateToProps, {
    clearAction,
    editComment
})(EditDialog);