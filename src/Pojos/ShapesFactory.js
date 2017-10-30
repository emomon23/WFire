import {BaseShapeModel, SquareModel, CircleModel}  from './ShapeModels'

export class Randomizer {
    nextNumber(min, max) {
        let randomNumber = Math.floor(Math.random() * (max - min) + min);
        return randomNumber;
    }
}

export class ShapeModelSorter {
    constructor(){
        this._shapes = [];
    }

    addShape(shape){
        let insertedShapeArea = shape.getArea();
        let gotIt = false;

        for (var i=0; i< this._shapes.length; i++){
            if (this._shapes[i].getArea() < insertedShapeArea){
                this._shapes.splice(i, 0, shape);
                gotIt = true;
                break;
            }
        }

        if (!gotIt){
            this._shapes.push(shape);
        }
    }

    setShapes(shapesArray){
        var self=this;

        shapesArray.forEach(function(shape){
            self.addShape(shape);
        });
    }

    getShapes(){
        return this._shapes;
    }
}

export class ShapeFactory {
    constructor(){
        this._randomizer = new Randomizer();
    }

    getRandomCircles(numberOfCircles, maxSize, minSize, generatedKeyBase){
        maxSize = maxSize || 50;
        minSize = minSize || 1; 
        generatedKeyBase = generatedKeyBase || 0;

        let shapeSorter = new ShapeModelSorter();

        for (var i=0; i<numberOfCircles; i++){
            let size = this._randomizer.nextNumber(minSize, maxSize);
            let newCircle = new CircleModel(size);
            newCircle.key = generatedKeyBase;
            generatedKeyBase+=1;
            shapeSorter.addShape(newCircle);
        }

        return shapeSorter.getShapes();
    } 

    getRandomSquares(numberOfSquares, maxSize, minSize, generatedKeyBase){
        maxSize = maxSize || 100;
        minSize = minSize || 1;
        generatedKeyBase = generatedKeyBase || 0;
        let shapeSorter = new ShapeModelSorter();

        for (var i=0; i<numberOfSquares; i++){
            let size = this._randomizer.nextNumber(minSize, maxSize);
            let newSquare = new SquareModel(size);
            newSquare.key = generatedKeyBase;
            generatedKeyBase+=1;
            shapeSorter.addShape(newSquare);
        }

        return shapeSorter.getShapes();
    }

    getRandomShapes(numberOfShapesEach, maxSize, minSize){
        var circles = this.getRandomCircles(numberOfShapesEach, maxSize, minSize);
        var squares = this.getRandomSquares(numberOfShapesEach, maxSize, minSize, numberOfShapesEach);

        let sorter = new ShapeModelSorter();
        sorter.setShapes(circles);
        sorter.setShapes(squares);

        return sorter.getShapes();
    }
}

export default ShapeFactory;

