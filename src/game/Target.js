import React, { PureComponent } from 'react';
import { WIDTH, HEIGHT } from '../constants/gameConsts';
import './game.scss';


export default class Target extends PureComponent {
  constructor() {
    
    super();
    this.state = {
      targetSize: 100,
      styles: this.generateStylesForTarget()
    };
  }

  generateStylesForTarget(){
    const targetSize = this.state ? this.state.targetSize : 100;
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

  handleShot = () => {

    this.setState({
      styles: this.generateStylesForTarget()
    });

    this.props.handleShot();
  }

  render() {
    const { styles } = this.state;

    return (
      <div style={styles} onClick={this.handleShot} className='target'></div>
    );
  }
}
