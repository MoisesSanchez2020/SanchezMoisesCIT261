function Person (name, eyeColor, age){
    this.name = name;
    this.eyeColor = eyeColor;
    this.age = age;
    this.updateAge = function(){
        return ++ this.age;
    };
}
var person01 = new Person('Daniel', 'Blue', 27);
var person02 = new Person('Arjen', 'Brown', 57);

console.log(person01.updateAge());
