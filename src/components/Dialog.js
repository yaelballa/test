import React, {PureComponent} from 'react';
import Dialog from 'material-ui/Dialog';
import Button from 'material-ui/RaisedButton';

import './Dialog.css';

export class ActionDialog extends PureComponent {
    render() {
        const actions = [
            <Button
                className="button"
                label={this.props.cancel.label}
                primary={false}
                onClick={this.props.cancel.method}
            />,
            <Button
                className="button"
                label={this.props.action.label}
                primary={true}
                keyboardFocused={true}
                onClick={this.props.action.method}
            />,
        ];

        return <Dialog
                    title={this.props.title}
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.props.cancel.method}>
                    {this.props.children}
                </Dialog>;
    }
}

export default ActionDialog;