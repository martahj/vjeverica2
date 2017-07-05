// @flow
import React, { PureComponent } from 'react';
import { Col } from 'react-flexbox-grid';
import type { ColState } from './types';

type EditorColumnProps = {
  col: ColState;
};

class EditorColumn extends PureComponent {
  props: EditorColumnProps;
  state = {
    initialContent: this.props.col.content,
    currentContent: this.props.col.content,
  }

  showAddVideoModal = () => {
    // open a modal asking for the url or something
    // display the video
  }

  showEmbedLinkModal = () => {

  }

  showEmbedImageModal = () => {
    /*
     This will prompt for:
     - image url
     - max width
     */
  }

  updateContent = (newContent: string) => {
    this.setState({
      currentContent: newContent,
    });
  }

  handleSave = () => {
    // call cb to save into this column
  }

  render() {
    const { flexVals } = this.props;
    const { currentContent } = this.state;
    return (
      <Col xs={flexVals.xs} sm={flexVals.sm} md={flexVals.md} lg={flexVals.lg}>
        <input>{currentContent}</input>
      </Col>
    );
  }
}

export default EditorColumn;
