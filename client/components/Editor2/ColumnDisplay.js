// @flow
import React, { PureComponent } from 'react';
import { Col } from 'react-flexbox-grid';

type ColumnDisplayProps = {
  content: string
  handleChange: (newContent: string) => void,
  activeDecorators: Array<string>
};

class ColumnDisplay extends PureComponent {
  props: ColumnDisplayProps;

  handleChange = (newValue) => {
    console.log('got new value', newValue);
    this.props.handleChange(newValue);
  }

  render() {
    return (
      <Col>
        <input value={this.props.content} />
      </Col>
    );
  }
}

export default ColumnDisplay;

/*
content: [
{
  type: TEXT,
  color: 'black',
  decorators: [],
  content: 'flwjfowowio',
  
}
]
 */
