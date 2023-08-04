// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.


function checkAllElementsAreSame(arr) {
  if (arr.length === 0) {
    return true; 
  }

  const firstElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== firstElement) {
      return false;
    }
  }

  return true;
}

const array1 = [1, 1, 1, 1, 1];
console.log(checkAllElementsAreSame(array1)); // Выведет: true

const array2 = [2, 2, 2, 2, 3];
console.log(checkAllElementsAreSame(array2)); // Выведет: false


// Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 

Удачи!


function countEvenOddAndZeroElements(arr) {
  let evenCount = 0;
  let oddCount = 0;
  let zeroCount = 0;

  for (const element of arr) {
    if (typeof element === 'number' && !isNaN(element)) {
      if (element === 0) {
        zeroCount++;
      } else if (element % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  }

  console.log(`Чётных элементов: ${evenCount}`);
  console.log(`Нечётных элементов: ${oddCount}`);
  console.log(`Нулей: ${zeroCount}`);
}

const array = [1, 2, 3, 0, 4, 'text', null, 5];
countEvenOddAndZeroElements(array);


Создайте произвольный массив Map. Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».

Используйте шаблонные строки.

const myMap = new Map();
myMap.set('apple', 5);
myMap.set('banana', 3);
myMap.set('orange', 8);

for (const [key, value] of myMap) {
  console.log(`Ключ — ${key}, значение — ${value}`);
}
















