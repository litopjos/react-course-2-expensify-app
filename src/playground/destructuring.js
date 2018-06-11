console.log('destructuring');

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Gasan',
        temperature: 90
    }
};

const book = {
    name:'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher : {
        name: 'Penguin'
    }
}



const {name:publisherName='anonymous'} = book.publisher;

const {city,temperature:temp} = person.location;
const {name = 'anonymous',age} = person;

console.log (` ${name} is ${age}`);
console.log(`It is ${temp} in ${city}`);
console.log(publisherName);

const itemAvail = ['coffee (hot)', '$2', '$2.50', '$2.75'];

const[item,,mediumPrice] = itemAvail;
console.log(`A ${item} costs ${mediumPrice}`);
