function parseCount(number) {
    let parse = Number.parseFloat(number)
        if (Number.isNaN(parse)) {
            throw new Error("Невалидное значение");
          };
    
        return parse;
    }; 

function validateCount(string) {
    try {
        return parseCount(string);
    } catch(error) {
        return error;
    }
}

class Triangle {
    constructor(a, b, c) {
        if(!(a + b > c && a + c > b && b + c > a) ) {
            throw new Error("Треугольник с такими сторонами не существует")
        } 
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimeter() {
        return this.a + this.b + this.c ;
    }

    get area() {
        let p = (this.perimeter / 2);
        return parseFloat(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
        
    } catch(err) {
        return {
            get area() {return "Ошибка! Треугольник не существует";},
            get perimeter() {return "Ошибка! Треугольник не существует";}
        };
    }

}
