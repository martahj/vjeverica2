// @flow
import React, { PureComponent } from 'react';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

type AddRowModalState = {
  numberOfCols: number
};

type AddRowModalProps = {
  open: boolean,
  closeModal: () => void,
  addRow: (columns: number) => void,
};

type ColumnsOption = {
  value: number,
};

const columnOptions: Array<ColumnsOption> = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
];

class AddRowModal extends PureComponent {
  props: AddRowModalProps;
  state: AddRowModalState = {
    numberOfCols: 1,
  }

  confirmAdd = (): void => {
    this.props.addRow(this.state.numberOfCols);
  }

  handleValueChange = (event: Event, index: number, value: number): void => {
    console.log('gonna select value', value);
    this.setState({ numberOfCols: value });
  }

  render() {
    const {
      open,
      closeModal,
    } = this.props;
    const { numberOfCols } = this.state;
    return (
      <Dialog
        title='Add Row'
        open={open}
        actions={[
          <FlatButton
            label='Cancel'
            onClick={closeModal}
          />,
          <FlatButton
            label='Add'
            onClick={this.confirmAdd}
          />,
        ]}
        >
        <p>
          Select the number of columns to appear in the row. Keep in mind that
          this is the amount that will appear on desktop-sized screeen widths;
          smaller windows may stack the columns on top of each other for a more
          mobile-friendly experience.
        </p>
        <DropDownMenu value={numberOfCols} onChange={this.handleValueChange}>
          {columnOptions.map(({ value }) => (
            <MenuItem
              key={`Add_Row_With_${value}_Cols`}
              value={value}
              primaryText={`${value}`}
            />
          ))}
        </DropDownMenu>
      </Dialog>
    );
  }
}

export default AddRowModal;
