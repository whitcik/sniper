import React, { PureComponent } from 'react';
import { WIDTH, HEIGHT } from '../constants/gameConsts';
import './game.scss';


export default class Target extends PureComponent {
  constructor() {
    
    super();
    this.state = {
      targetSize: 10,
      styles: this.generateStylesForTarget()
    };
  }

  generateStylesForTarget(){
    const targetSize = this.state ? this.state.targetSize : 10;
    const left = Math.floor((Math.random() * (WIDTH - targetSize)) + 0); 
    const top = Math.floor((Math.random() * (HEIGHT - targetSize)) + 0); 
    console.log('test', left, top);
    return {
      width: targetSize,
      height: targetSize,
      left: left,
      top: top
    }
  }

  handleSuccess = () => {

    this.setState({
      styles: this.generateStylesForTarget()
    });

    this.props.handleSuccess();
  }

  render() {
    const { handleSuccess } = this.props;
    const { styles } = this.state;

    return (
      <div style={styles} onClick={this.handleSuccess} className='target'></div>
    );
  }
}
