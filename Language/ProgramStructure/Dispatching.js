let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Today is Monday');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday');
    break;
  case 'Wednesday':
    console.log('Today is Wednesday');
    break;
  default:
    console.log('Today is some other day');
}

let fruit = 'Apple';

switch (fruit) {
  case 'Apple':
  case 'Mango':
  case 'Banana':
    console.log('It is a fruit');
    break;
  case 'Carrot':
  case 'Broccoli':
  case 'Potato':
    console.log('It is a vegetable');
    break;
  default:
    console.log('It is something else');
}