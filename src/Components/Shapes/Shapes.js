import React, { Component } from 'react';
import Shape from './Shape';
import {BaseShapeModel, SquareModel, CircleModel}  from '../../Pojos/ShapeModels';
import {ShapeFactory, Randomizer} from '../../Pojos/ShapesFactory';
import './Shape.css';

class Shapes extends Component {
    constructor(){
        super();

        this.state = {
           totalNumberOfShapes: 10,
           circleBackColor: 'Blue',
           squareBackColor: 'Red',
           minSize: 1,
           maxSize:80,
           shapeList: []
        };
    }

    createShapeList(state){
        let shapeFactory = new ShapeFactory();
        let result = shapeFactory.getRandomShapes(state.totalNumberOfShapes/2, state.minSize, state.maxSize);
        return result;
    }

    render() {
        //Using self for the map function below
        let self=this;

        if (self.state.shapeList.length === 0){
           self.state.shapeList = self.createShapeList(self.state);
        }

        return (
            <div>
                <div className='inputContainer'>
                    <label>Number of Shapes</label>
                    <input value={self.state.totalNumberOfShapes} onChange={self.changeNumberOfShapes.bind(self)}/>
                </div>
                <div className='inputContainer'>
                    <label>Circle Color</label>
                    <input value={self.state.circleBackColor} onChange={self.changeCircleColor.bind(self)}/>
                </div>
                <div className='inputContainer'>
                    <label>Square Color</label>
                    <input value={self.state.squareBackColor} onChange={self.changeSquareColr.bind(self)}/>
                </div>
                <table border='1'>
                    <tr>
                        <th></th>
                        <th>Meta Data</th>
                    </tr>

                {
                    self.state.shapeList.map(function(ashape){
                        let backClr = ashape.getType() === 'Circle'? self.state.circleBackColor : self.state.squareBackColor;

                        return (
                            <tr>
                                <td>
                                   <Shape shape={ashape} backColor={backClr}/>
                                </td>
                                <td>
                                    {ashape.toString()}
                                </td>
                            </tr>
                        )
                    })
                }
                  
                </table>
            </div>
        );
    }

    changeNumberOfShapes(event){
        this.state.shapeList = [];
        this.setState({
            totalNumberOfShapes: event.target.value
        });
    }

    changeCircleColor(event){
        this.state.shapeList = [];
        this.setState({
            circleBackColor: event.target.value
        });
    }

    changeSquareColr(event){
        this.state.shapeList = [];
        this.setState({
            squareBackColor: event.target.value
        });
    }
}
export default Shapes;