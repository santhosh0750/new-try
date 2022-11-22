var a = 1
var b = a
b = 2

console.log(a);
console.log(b);

var obj1 = {
    name :'xxx',
    age : 20
}
var obj2 ={...obj1};
obj2.name = 'yyy';

console.log(obj1);
console.log(obj2);

var a = [1,2,3];
var b = a
a.push(4);
console.log(a);
console.log(b);


var request = new XMLHttpRequest();
request.open('GET','http://api.countrylayer.com/v2/all?access_key=3f455ef2034d0bfed4bd3eb4e1c65a95');
request. send();
request.onload = function(){
    var countrydata = JSON.parse(this.responseText);
        for(let country of countrydata){
            console.log(country.name)
    }
}

function Sum (a,b,c,d,e){
    let ab = a+b+c+d+e;
    return ab;
    }
    
    let sscore = sum(91,81,69,69,69);
    console.log(sscore)