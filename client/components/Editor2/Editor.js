// @flow
import React, { PureComponent } from 'react';
import ColumnDisplay from './ColumnDisplay';
import Toolbar from './Toolbar';

type FlexVals = {
  xs: number,
  sm: number,
  md: number,
  lg: number,
};

type EditorState = {
  editorContent: {
    flexVals: flexVals,
    content: string,
  }
  // activeDecorators: Array<string>,
};

const defaultEditorState: EditorState = {
  editorContent: {
    flexVals: {
      xs: 12,
      sm: 12,
      md: 12,
      lg: 12,
    },
    content: 'Test content!',
  },
};

class Editor extends PureComponent {
  state: EditorState = defaultEditorState;

  updateContent = (newContent: string): void => {
    this.setState({
      editorContent: {
        ...this.state.editorContent,
        content: newContent,
      },
      activeDecorators: [],
    });
  }

  handleSave = () => {
    alert('Will save to database');
  }

  handleBold = () => {
    alert('clicked bold');
  }
  handleItalic = () => {
    alert('clicked italic');
  }
  handleLink= () => {
    alert('clicked link');
  }
  handleImage = () => {
    alert('clicked image');
  }
  handleVid = () => {
    alert('clicked vid');
  }
  handleColorChange = () => {
    alert('clicked color');
  }
  handleUnderline = () => {
    alert('clicked underline');
  }
  handleTrack = () => {
    alert('clicked track');
  }
  handleSize = () => {
    alert('clicked size');
  }

  render() {
    const {
      editorContent,
      activeDecorators,
    } = this.state;
    return (
      <div>
        <Toolbar
          handleBold={this.handleBold}
          handleItalic={this.handleItalic}
          handleLink={this.handleLink}
          handleImage={this.handleImage}
          handleVid={this.handleVid}
          handleColorChange={this.handleColorChange}
          handleUnderline={this.handleUnderline}
          handleTrack={this.handleTrack}
          handleSize={this.handleSize}
        />
        <ColumnDisplay
          content={editorContent.content}
          handleChange={this.updateContent}
          activeDecorators={activeDecorators}
        />
      </div>
    );
  }
}

export default Editor;
