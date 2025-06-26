function favoriteAnimal(animal){
    return animal+" is my favorite animal"
}

console.log(favoriteAnimal('Goat'))

function add7(number){
    return parseInt(number)+7;
}

console.log(add7(12))

function multiply(num1 ,num2){
    return parseInt(num1)*parseInt(num2)
}
console.log(multiply(5,2))

function capitalise(string){
    return string.charAt(0).toUpperCase() +string.slice(1).toLowerCase();
}
console.log(capitalise('hellO'))

function lastLetter(str){
    return str.charAt(str.length-1)
}
console.log(lastLetter('Mermaid'))