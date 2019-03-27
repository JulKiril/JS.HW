// Завдання 1: Потрібно написати функцію, яка повертає максимальний переданий їй числовий
// параметр. Кількість параметрів складає 3 або 4.
// Приклад роботи:
// 	f(5,-2,10) – має повернути 10;
// f(5,-2,30,6) – має повернути 30;
// 1-й варіант
function max(a,b,c){
	let x;
	if(a>b && a>c){
		x = a;
	}
	else if(b>a && b>c){
		x = b;
	}
	else if(c>a && c>b){
		x = c;
	}
	return x;
}//
console.log(max(-10,-2,-15));

// 2-й варіант

function max(){
	return Math.max.apply(Math,arguments);
}
console.log(max(1,2,3,5));

// Завдання 2: Потрібно написати функцію, яка обраховує суму чисел геометричної прогресії, в якій
// першим числом є 1.
// 	Функція приймає два аргументи: кількість чисел прогресії і її знаменник . Наприклад, в прогресії
// типу 1,2,4,8,16 кількість чисел - 5, а знаменник – 2 (тому що кожне наступне число прогресії
// домножується на 2). Результат, який має повернути функція для даної прогресії 31.
// Функцію потрібно написати двома способами:
// 	1) З використанням циклу
// 2) З використанням формули знаходження суми геометричної прогресії:
// 	,
// де b1 – перший елемент прогресії (в даному завданні це 1),
// q – знаменник,
// 	n – кількість елементів прогресії
// Приклад роботи:
// 	f(5,2) – 1+2+4+8+16=31
// f(4,3) – 1+3+9+27=40

function progres(a,b) {
		let arr = [1];
		let summ = 1;
	for (let i = 1; i < a; i++) {
		arr[i] = arr[i-1]*b;
		summ += arr[i];
	}
	return summ;
}
	console.log(progres(4,3));
// 2-й варіант
function progres(n,q) {
	let b1 = 1;
	let bn = b1;
	let summ;
	for(let j=b1;j<n;j++){
		bn *= q;
	}
	summ = (bn * q - b1) / (q - 1);
	return summ;
}
console.log(progres(4,3));

// Завдання 3: Потрібно написати функцію, в яку передається 2 параметри, які користувач вводить
// через вікно prompt(). Потрібно щоб функція виводила діапазон тільки простих чисел вікном alert(), між
// тими які ввів користувач.

let num1 = +prompt('enter number');
let num2 = +prompt('enter number');
if(num1 <= 2){
nextPrime:
    for (var i = 2; i <= num2; i++) {

        for (var j = 2; j < i; j++) {
            if (i % j == 0) continue nextPrime;
        }
        alert( i );
    }
}
if(num1 > 2){
    nextPrime:
        for (var i = num1; i <= num2; i++) {

            for (var j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
            }

            alert( i );
        }
}



