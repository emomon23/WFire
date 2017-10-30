export class BaseShapeModel {
    constructor(size, type) {
        this._size = size;
        this._type = type;
    }

    getType() {
        return this._type;
    }

    getArea(){ return null;}

    getSize() {return this._size;}

    toString() {
        return 'I am a ' + this._type;
    }
}

export default BaseShapeModel;

export class CircleModel extends BaseShapeModel {
    constructor(sz){
        super(sz, 'Circle');
    }

    getArea() {
       return Math.pow(this._size, 2) * 3.14159; 
    }

    toString(){
        return 'Circle: Radius = ' + this._size + ', Area = ' + this.getArea();
    }
}

export class SquareModel extends BaseShapeModel {
    constructor(sz){
        super(sz, 'Square');
    }

    getArea(){
        return this._size * this._size;
    }

    toString() {
        return 'Square: Size = ' + this._size +  ', Area = ' + this.getArea();
    }
}
