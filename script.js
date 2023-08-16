function showFirstMessage() {
	console.log('hello world');
}

showFirstMessage();

function send(text) {
	console.log(text);
}

send('saman');


function calc(firstNum, secondNum) {
	console.log(firstNum * secondNum);
}

calc(3, 3);
calc(3, 5);
calc(3, 10);

const logger = function() {
	return 3 * 5;
};

const twich = logger() + 2;
console.log(twich);


const dely = (c, b) => c + b;

console.log(dely(3, 3) * 2);


const usd = 28;
const eur = 30;

function convert(amount, value) {
	console.log(value * amount);
}

convert(usd, 500);
convert(eur, 500);

function sayHello(name) {
	return `Привет, ${name}`;
}

console.log(sayHello('Anton'));


function returnNeighboringNumbers(number) {
	return [number - 1, number, number + 1];
}
console.log(returnNeighboringNumbers(5));


function retry(num, times) {
	// eslint-disable-next-line use-isnan
	if (typeof(times) !== 'number' || times <= 0) {
		return num;
	}

	let str = '';

	for (let i = 1; i <= times; i++) {
		if (i === times) {
			str += `${num * i}`;
		} else {
			str += `${num * i}---`;
		}
	}

	return str;
}
console.log(retry(3, 3));

console.log(retry(5,10));