//Q1 変数
let nickname = 'タケ';
let age = '30';
let text = '私のニックネームは' + nickname + 'です。年齢は' + age + '歳です。';
console.log(text);

//Q2 配列
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go'];
let templateText = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`;
console.log(templateText);

//Q3 オブジェクト
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};
console.log(user.age);

//Q4 配列 × オブジェクト
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];
console.log(playerList[1].favorites[1]);

//Q5 四則演算
console.log((playerList[0].age + playerList[1].age + playerList[2].age) / 3);

//Q6 関数
function sayHello() {
  let greet = 'Hello'
  console.log(greet);
};
sayHello();

let sayWorld = function() {
  let text = 'World'
  console.log(text);
};
sayWorld();

//Q7 メソッド
user.birthday = '2000-09-27';

user = {
  sayHello: function() {
  console.log('Hello！');
  }
};
user.sayHello();

//Q8 引数
let calc = {
  add: function(x, y) {
    let add = x + y;
    console.log(add);
  },
  subtract: function(x, y) {
    let subtract = x - y;
    console.log(subtract);
  },
  multiply: function(x, y) {
    let multiply = x * y;
    console.log(multiply);
  },
  divide: function(x, y) {
    let divide = x / y;
    console.log(divide);
  }
};
calc.add(3,4);
calc.subtract(15,5);
calc.multiply(7,7);
calc.divide(10,2);

//Q9 返り値
function remainder(x, y) {
  let calc = x % y ;
  return calc;
};
console.log('5 を 3 で割った余りは' + remainder(5, 3) + 'です。');

//Q10 スコープ
//変数xはfoo関数の中に定義されており、
// JavaScriptでは関数の中で定義した変数はその関数ないのみでスコープが有効なので、
// 関数の外にあるconsole.log(x)では参照出来ず、エラーが出力される。


//応用編 問題
//Q1 標準組み込みオブジェクト
let random = Math.floor(Math.random() * 10);
console.log(random);

//Q2 コールバック関数
let greet = function(){
  console.log('Hello World!');
};
setTimeout(greet, 3000);

//Q3 if
let num = 0;
if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
};

//Q4 for
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
};
console.log(numbers);

//Q5 for × if
let mixed = [4, '2', 5, '8', '9', 0, 1];

mixed.forEach((item) => {
  if (typeof item === "string") {
    console.log('not number')
    } else if (item % 2 === 0) {
    console.log('even')
    } else {
    console.log('odd')
    }
  }
);