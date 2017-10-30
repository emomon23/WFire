import React, { Component } from 'react';
import Shape from './Shape';
import {BaseShapeModel, SquareModel, CircleModel}  from '../../Pojos/ShapeModels';
import {ShapeFactory, Randomizer} from '../../Pojos/ShapesFactory';
import './Shape.css';

class Shapes extends Component {
    constructor(props){
        super(props);

        this.state = {
           totalNumberOfShapes: 10,
           circleBackColor: 'Blue',
           squareBackColor: 'Red',
           minSize: 1,
           maxSize:80,
           shapeList: []
        };

        this.inputChangeEvent = this.inputChangeEvent.bind(this);
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
                    <input name='totalNumberOfShapes' value={self.state.totalNumberOfShapes} onChange={self.inputChangeEvent}/>
                </div>
                <div className='inputContainer'>
                    <label>Circle Color</label>
                    <input name='circleBackColor' value={self.state.circleBackColor} onChange={self.inputChangeEvent}/>
                </div>
                <div className='inputContainer'>
                    <label>Square Color</label>
                    <input name='squareBackColor' value={self.state.squareBackColor} onChange={self.inputChangeEvent}/>
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

    inputChangeEvent(event){
        this.state.shapeList = [];
        let name = event.target.name;

        this.setState({
            [name]: event.target.value
        });
    }
}
export default Shapes;