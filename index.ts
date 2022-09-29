import Hourglass from './src/model/Hourglass';

const inputUser = 25;

const hourglass1 = new Hourglass(inputUser);
const hourglass2 = new Hourglass(inputUser);

console.log(hourglass1.getHourglass('top'));
console.log(hourglass2.getHourglass('bottom'));

