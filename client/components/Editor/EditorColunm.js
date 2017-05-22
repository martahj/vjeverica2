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
    updatedContent: this.props.col.content,
  }

  render() {
    const { flexVals,  }
    return (
      <Col >

      </Col>
    )
  }
};

export default EditorColumn;
