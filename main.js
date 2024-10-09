let year = prompt('чи є рік високосним?');

if (!(year  % 400) || (!(year % 4 ) && (year % 100))) {
    alert ('Высокостный год');
} else  {
    alert('Не высокостный год');
} 