/**
 * function.js
 * 07_function.html에 포함.
 */

/*
JavaScript에서 함수를 선언(정의)하는 방법 :
function 함수이름([파마리터, ...]) {
    실행 코드;
    [return [리턴값];] -> 리턴값이 있으면.
}

Java와 다른 점 :
- 함수의 리턴 타입을 선언하지 않음.
- 파라미터를 선언할 때 var, const, let 키워드를 사용하지 않음. -> 변수 이름만 사용.
*/

// 함수 선언.
function add(x, y) {
    return x + y;
}

// 함수 호출
let result = add(1, 2);
console.log('result = ', result);

// argument : 함수를 호출할 때 함수에 전달하는 값.
// parameter : 전달받은 argument를 저장하기 위한 지역 변수. 함수 선언부에서 선언.

// JavaScript의 특징
// 자바스크립트 함수는 파라미터의 타입을 검사하지 않음.
result = add('안녕하세요', 'Hello');
console.log(result);

// 자바스크립트 함수는 파라미터 개수를 검사하지 않음.
result = add(10, 20, 30); // 함수 선언의 parameter 개수보다 더 많은 argument를 전달.
console.log('result = ', result);
// 앞에 선언된 x, y 값인 10, 20만 계산되어 나온다.
// 30부터 arguments의 개념에 저장이 되어 있다.

result = add(1); // 함수 선언의 parameter 개수보다 적은 argument를 전달.
console.log('result = ', result);
// 출력 결과 -> NaN(Not a Number) 숫자가 아니다. 
//           -> 숫자와 undefined을 더할 수 없어서 NaN이 뜬다. 
// 전달하지 않은 파라미터의 값은 undefined가 된다.

// 자바스크립트의 모든 함수는 arguments 이름의 프로퍼티를 가지고 있음.
// 함수 호출에서 전달한 모든 값들을 저장하는(배열과 비슷한) 객체. -> 배열처럼 사용.
function test() {
    console.log(arguments);
    for (let x of arguments) {
        console.log(x);
    }
}

test(1);
test(1, 'hello');

/*
JavaScript 함수의 특징 : 함수는 객체(object)!
1. 함수는 프로퍼티(property - 자바의 필드)를 가질 수 있음. (예) argumenets
2. 함수는 변수에 저장할 수 있음.
3. 함수의 argument로 다른 함수를 전달할 수 있음.
4. 함수 내부에서 다른 함수를 선언(정의)할 수 있음.
5. 함수는 다른 함수를 리턴할 수 있음.
*/

const plus = add; // 함수는 변수에 저장할 수 있다.
// const plus = add(); -> 함수를 호출해서 리턴값을 저장하는 것.
result = plus(100, 200);
console.log('result = ', result);

// 익명 함수 : 이름이 없는 함수.
const minus = function(x, y) {
    return x - y;
};

console.log('minus = ', minus(1, 2));

// 익명 함수를 선언과 동시에 호출 :
result = (function(x, y) {
    return x / y;
})(1, 2);

console.log('result =', result);


// 함수를 argument로 갖는 함수 :
function calculate(x, y, operator) {
    return operator(x, y);
}

result = calculate(1, 2, add);
console.log('result = ', result)

result = calculate(1, 2, function(x, y){
    return x - y;
});
console.log('result =', result);

function increase(n) {
    //return function (x) {return x + n;};
    
    // 함수 안에서 함수를 정의 하는 것. -> 내부 함수.
    function addN(x) {
        return x + n;
    }
    
    // 함수를 리턴.
    return addN;
}

const increaseTen = increase(10);
console.log(increaseTen); // 그냥 함수 객체를 리턴한다.
console.log(increaseTen(1)); // x에 1이 들어간다.

const inceaseOne = increase(1);
console.log(inceaseOne(1));

// 화살표 함수 (arrow function) 
// (파라미터, ...) => {실행코드; ...}
// (파라미터, ...) => 리턴값            -> 리턴값만 있는 경우.

const fnAdd = (x, y) => {return x + y;};
console.log(fnAdd(3, 4));

const fnSubtract = (x, y) => x - y; // {}와 return은 리턴값만 존재하면 생략해도 상관없다.
console.log(fnSubtract(3, 4));








