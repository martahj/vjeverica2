// @flow
import React, { PureComponent } from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid';
// import AddRowModal from './AddRowModal';
import type {
  FlexValsSignature,
  ColState,
  RowState,
} from './types';

type EditorProps = {
  editorContents: ?string,
};

type EditorContents = {
  rows: Array<RowState>,
};

type EditorState = {
  editorContents: EditorContents,
  addRowModalOpen: boolean,
};

const blankEditorContents: EditorContents = {
  rows: [],
};

const defaultColConfig: ColState = {
  flexVals: FlexValsSignature,
  type: 'TEXT',
  content: null,
}

const parseEditorContents = (contents: string): EditorContents => JSON.parse(contents);

class Editor extends PureComponent {
  props: EditorProps;
  state: EditorState = {
    editorContents: this.props.editorContents ? parseEditorContents(this.props.editorContents) : Object.assign(blankEditorContents),
    addRowModalOpen: false,
  }

  addRow = (): void => {
    const { rows } = this.state.editorContents;
    this.setState({
      editorContents: {
        rows: [
          ...rows,
          {
            cols: [ defaultColConfig ],
          }
        ]
      },
    });
  }

  // The ratio will have been validated before the function is called
  // This function will divide a column into ratio.length columns and move all
  // the current contents to the specified column
  divideColumn = (
    rowIndex: number,
    colIndex: number,
    ratio:Array<FlexValsSignature>,
    currentContentsTarget: number = 0,
  ): void => {
    const { rows } = this.state.editorContents;
    const targetColumn = rows[rowIndex].cols[colIndex];
    const newColumns = Array(ratio.length).fill({ ... defaultColConfig });
    newColumns[currentContentsTarget].content = targetColumn.content;
    newColumns[currentContentsTarget].type = targetColumn.type;
    newColumns.forEach((column) => {
      column.flexVals =
    });
  }

  mergeColumns = (
    rowIndex: number,
    startingColIndex: number,
    keepFirstColContent: boolean,
    keepSecondColContent: boolean
  ): void => {
    // If startingColIndex is equal to row.cols.length, need to throw error
    const { rows } = this.state.editorContents;
    const col1 = rows.cols[startingColIndex];
    const col2 = rows.cols[startingColIndex + 1];
    const updatedContent = `${keepFirstColContent && col1.content} ${keepSecondColContent && col2.content}`;
    const updatedFlex = {
      xs: col1.flexVals.xs + col2.flexVals.xs,
      sm: col1.flexVals.sm + col2.flexVals.sm,
      md: col1.flexVals.md + col2.flexVals.md,
      lg: col1.flexVals.lg + col2.flexVals.lg,
    }
    this.setState({
      editorContents: {
        rows: {
          ...rows.slice(0, rowIndex),
          {
            cols: [
              cols.slice(0, startingColIndex),
              {
                flexVals: updatedFlex,
                content: updatedContent,
                type: col1.type,
              }
              cols.slice(startingColIndex + 2),
            ]
          },
          ...rows.slice(rowIndex + 1),
        }
      }
    })
  }

  deleteRow = (rowIndex): void => {
    this.setState({
      editorContents: {
        rows: {
          this.state.rows.slice(0, rowIndex),
          this.state.rows.slice(rowIndex + 1),
        }
      },
    })
  }

  updateColContents = (
    rowIndex: number,
    colIndex: number,
    newContents: any,
  ): void => {
    const { rows } = this.state.editorContents;
    const { cols } = rows[rowIndex];
    const targetColumn = cols[colIndex];
    this.setState({
      editorContents: {
        rows: [
          rows.slice(0, rowIndex),
          {
            cols: [
              cols.slice(0, colIndex),
              {
                ...targetColumn,
                contents: newContents,
              }
              cols.slice(colIndex + 1),
            ]
          }
          rows.slice(rowIndex + 1),
        ]
      }
    });
  }

  render() {
    const {
      addRowModalOpen,
      editorContents
    } = this.state;
    return (
      <div>
        <Toolbar>
          <ToolbarGroup>
            <RaisedButton
              label='Add Row'
              onClick={this.handleAddRowClick}
            />
          </ToolbarGroup>
        </Toolbar>
        <div>
          {/* {editorContents.rows.map(({ cols }) => (
            <Row around='xs'>
              {cols.map(col => (
                <Col xs={12} sm={12/cols.length}>
                  content
                </Col>
              ))}
            </Row>
          ))}
        </div> */}
        {/* <AddRowModal
          open={addRowModalOpen}
          closeModal={this.closeAddRowModal}
          addRow={this.addRow}
        /> */}
      </div>
    );
  }
}

export default Editor;
