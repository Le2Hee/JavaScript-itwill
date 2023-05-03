/**
 * object.js
 * 09_object.html에 포함.
 */

document.addEventListener('DOMContentLoaded', function() {
    // JSON(JavaScript Object Notation) : 자바스크립트에서 객체를 표기하는 방법.
    // Java : class -> new Constr();
    // JavaScript : { property : value, ...}
    
    const person = {
        name: '오쌤',
        age: 16,
        phone: ['010-0000-0000', '02-0000-0000'], // 마지막 원소에서 ,가 있어도 상관이 없다.
    };
    console.log(person);
    
    // 객체의 프로퍼티 접근(사용) : (1) 참조 연산자, (2) 인덱스 연산자.
    // 1 -> .
    console.log(person.name); // person 객체의 name 프로퍼티 값을 읽은 것.
    
    // 2 -> ['문자열']
    console.log(person['age']);// person 객체의 age 프로퍼티 값을 읽은 것.
    
    // 2가지 방법을 제공하는 이유 : for, in, ... 자바는 변수 이름으로 사용할 수 없지만,
    //                              자바스크립트는 키워드를 이름으로 사용할 수 있기 때문이다.
    
    console.log(person.phone);
    console.log(person.phone[0]);
    console.log(person['phone'][1]);
    
    person.name = '홍길동'; // person 객체의 name 프로퍼티 값을 변경.
    console.log(person);
    
    // 자바스크립트 객체는 프로퍼티를 추가할 수 있다. -> 삭제도 가능.
    person.company = '아이티윌';
    console.log(person);
    
    // 오타를 내도 잡지않고 실행을 해버린다.
    
    // 객체(object)에서 for-in 구문 :
    for (let key in person) {
        console.log(key, ":", person[key]); 
        // key -> 객체가 가지고 있는 프로퍼티 이름을 한줄씩 출력한다.
    }
    
    
    // 메서드를 갖는 객체 : 
    const score = {
        korean: 100,
        english: 90,
        math: 70,
        sum: function() {
            return this.korean + this.english + this.math;
        },
        mean: function() {
            return this.sum() / 3;
        },
    };
    
    console.log(score);
    console.log(score.sum()); // -> ()가 있어야 메서드 호출이 된다.
    console.log(score.mean());
    
    // 생성자 함수 : 생성자는 대문자로 만드는게 보통 일반적이다. 
    function Score(korean, english, math) {
        // Java로 치면 필드에 해당하는 부분.
        this.korean = korean;
        this.english = english;
        this.math = math;
        // this가 변수를 생성하는 것.
        
        // Java로 치면 메서드에 해당하는 부분.
        this.sum = function () {
            return this.korean + this.english + this.math;
        };
        
        this.mean = function() {
            return this.sum() / 3;
        };
    } 
    // 생성자 함수는 호출하는 방식도 독특하다.
    
    // 생성자 함수 호출하는 방법 :
    const score1 = new Score(10, 20, 30);
    console.log(score1);    
    console.log(score1.sum()); // 객체 메서드 호출.
    console.log(score1.mean());
    
    // 재활용이 가능한 함수 객체가 된다.
    
    const score2 = new Score(90, 77, 50);
    console.log(score2);    
    console.log(score2.sum());
    console.log(score2.mean());
    
});
 