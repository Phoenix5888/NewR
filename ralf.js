let numb = prompt('введіть число');

if (!(numb % 3 ) && !(numb % 5)) {
    alert ('FizzBuzz');
} else if (!(numb % 5)) {
    alert('Buzz');
} else if (!( numb % 3)) {
    alert('Fizz');
} else {
    alert(' не делится')
}


