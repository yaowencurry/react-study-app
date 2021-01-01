import React from "react";
import { CloseOutlined } from '@ant-design/icons';
import './Dialog.scss'

const withComponent = (View, close) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        close
      }
    }

    render () {
      console.log(this.state.close);
      return <View close={this.state.close}></View>
    }
  }
}

export default class Dialog extends React.Component {

  render () {
    const DialogComponent = withComponent(this.props.component, this.props.close);
    console.log(DialogComponent);
    return (
      <div className="dialog" id="dialog">
        <div className="dialog-box">
          <h3 className="dialog-box__title">
            {this.props.title}
            <CloseOutlined className="close" onClick={() => this.props.close()} />
          </h3>
          <DialogComponent />
        </div>
      </div>
    )
  }
}