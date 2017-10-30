import React, { Component } from 'react';
import './Shape.css';

class Shape extends Component {
    render() {
        let shapeType = this.props.shape.getType();
        let divStyle = shapeType === 'Circle'? this.getCircleStyle() : this.getSquareStyle();

        return(
            <div style={divStyle}></div>
        );
    }

    getSquareStyle() {
        let size = this.props.shape.getSize();
        let color = this.props.backColor? this.props.backColor : 'Red';

        return {width: size, height:size, float:'left', border:'solid black 1px', backgroundColor: color};
    }

    getCircleStyle(){
        let color = this.props.backColor? this.props.backColor : 'Blue';
        let radius = this.props.shape.getSize();
        let heightWidth = radius*2;
        return {width:heightWidth, height:heightWidth, border:'solid black 1px', borderRadius:radius,  backgroundColor: color};
    }
}
export default Shape;