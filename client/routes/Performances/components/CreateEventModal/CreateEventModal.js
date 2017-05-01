// @flow
import React, { PureComponent } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

type CreateEventModalProps = {
  open: boolean,
  start: any,
  end: any,
  handleClose: Function,
};

class CreateEventModal extends PureComponent {
  props: CreateEventModalProps;

  confirmCreate = () => {
    alert('will create event');
    this.props.handleClose();
  }

  render() {
    const {
      open,
      start,
      end,
      handleClose,
    } = this.props;
    return (
      <Dialog
        open={open}
        actions={[
          <FlatButton
            label='Cancel'
            primary
            onClick={handleClose}
          />,
          <FlatButton
            label='Create'
            primary
            onClick={this.confirmCreate}
          />
        ]}
      >
      <div>
        Gotta create an event
      </div>
      </Dialog>
    );
  }
}

export default CreateEventModal;
