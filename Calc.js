/*function Calculator() {
    this.method={
        '+': (a,b)=>a+b,
        '-': (a,b)=>a-b,
    }
    this.calculate= function(str){
        str=str.split(' ');
        let a=+str[0];
        let op=str[1];
        let b=+str[2];
        return this.method[op](a,b);
    }
    this.addmethod= function(name, op){
        this.method[name]=op;
    }
}
let Calc= new Calculator;
alert(Calc.calculate(prompt()));
Calc.addmethod('*',(a,b)=>a*b);
alert(Calc.calculate(prompt()));*/
alert(1/0);