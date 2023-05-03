/**
 * array_function.js
 * 08_function.html에 포함.
 */

document.addEventListener('DOMContentLoaded', function() {
    const numbers = [1, 2, 3, 4, 5, 6, 7];
    
    // 배열 concat() 메서드 : 배열에 새로운 원소를 끝에 추가. 원소가 추가된 새로운 배열을 리턴.
    // 배열 push() 메서드 : 기존 배열의 끝에 원소를 추가. 리턴값은 없음.
    
    // 1. 배열 numbers의 원소들 중에서 홀수들만 원소로 갖는 배열을 만들고 출력.
    let num1 = new Array();
    for (let x of numbers) {
        if (x % 2 === 1) { // (x % 2) 만 넣어도 홀수를 찾아준다.
            num1 = num1.concat(x);
        }
    }
    console.log(num1);
    
    let odds = [];
    odds = numbers.filter((x) => x % 2); // x % 2 가 참이되는 값만 리턴한다. (0은 fasle, 1이면 true)
    console.log(odds);
    
    
    //const arr = [];
    //console.log(arr);
    //arr.push(100);
    //console.log(arr);
    //arr.push(200);
    //console.log(arr);
    // -> const는 변경할 수 없는 값이지만, 주소값이 변하지 않고 추가만 하는거여서 값이 변할 수 있다.
    
    // 2. 배열 numbers의 원소를 제곱한 숫자들을 원소로 갖는 배열을 만들고 출력.
    let num2 = new Array();
    for (let x of numbers) {
        num2 = num2.concat(x * x);
    }
    console.log(num2);
    // ** : 거듭제곱 연산자. 2번 곱한다.
    // num3 = num3.concat(x * x); -> num3 = num3.concat(x ** 2);와 같다.
    
    let squares = [];
    squares = numbers.map((x) => x ** 2);
    console.log(squares);
    
    // 3. 배열 numbers의 원소들 중에서 홀수들의 제곱을 원소로 갖는 배열을 만들고 출력.
    let num3 = new Array();
    for (let x of num1) {
        num3 = num3.concat(x * x);
    }
    console.log(num3);
    
    let oddSquares = [];
    oddSquares = numbers.filter((x) => x % 2).map((x) => x ** 2);
    console.log(oddSquares);
    
});



