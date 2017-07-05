// @flow
import react, { PureComponent } from 'react';

type ToolbarProps = {
  handleBold: () => void,
  handleItalic: () => void,
  handleLink: () => void,
  handleImage: () => void,
  handleVid: () => void,
  handleColorChange: () => void,
  handleUnderline: () => void,
  handleTrack: () => void,
  handleSize: () => void,
};

type ToolbarOption = {
  name: string,
  icon: null,
  value: boolean | string,
  callback: () => void,
};

type ToolList = Array<ToolbarOption>;

type ToolbarState = {
  tools: ToolList,
};

class Toolbar extends PureComponent {
  state: ToolbarState = {
    tools: [
      {
        name: 'bold',
        icon: null,
        value: false,
        callback: this.props.handleBold,
      },
      {
        name: 'italic',
        icon: null,
        value: false,
        callback: this.props.handleItalic,
      },
      {
        name: 'link',
        icon: null,
        value: false,
        callback: this.props.handleLink,
      },
      {
        name: 'image',
        icon: null,
        value: false,
        callback: this.props.handleImage,
      },
      {
        name: 'vid',
        icon: null,
        value: false,
        callback: this.props.handleVid,
      },
      {
        name: 'bold',
        icon: null,
        value: false,
        callback: this.props.handleBold,
      },
      {
        name: 'color',
        icon: null,
        value: 'black',
        callback: this.props.handleColorChange,
      },
      {
        name: 'underline',
        icon: null,
        value: false,
        callback: this.props.handleUnderline,
      },
      {
        name: 'audio',
        icon: null,
        value: false,
        callback: this.props.handleTrack,
      },
      {
        name: 'size',
        icon: null,
        value: '16',
        callback: this.props.handleSize,
      },
    ],
  }
  render() {
    return (
      <div>
        {this.state.tools.map(tool => (
          <div onClick={tool.callback}>
            {tool.name}
          </div>
        ))}
      </div>
    );
  }
}

export default Toolbar;
