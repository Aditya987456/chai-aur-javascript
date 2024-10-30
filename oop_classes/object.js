function additself(num){

    return num+num;
}

additself.power=40;

console.log(additself.power)
console.log(additself.prototype)  //i.e function also object.



function createshop(items,price){
    this.items=items
    this.price=price
}

//making a new method that go to prototype me matlab agar humne object me hi naya method de diya matlab
//sablog i.e function,objects,arr, etc ye sab bhi access kar sakte hai becz sab log to object hi hai na....

createshop.prototype.printinfo=function(){
    console.log(`price is ${this.price}`)
}

//new obj
const shop1=new createshop('chai', 25)
const shop2=new createshop('coffee', 200)

shop1.printinfo()
//shop1.prototype.printinfo()   har samay prototype likhne ki koi jarurat nahi hai wo JS dekh lega.


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/