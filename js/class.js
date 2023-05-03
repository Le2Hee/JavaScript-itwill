/**
 * class.js
 * 10_class.html에 포함
 */

document.addEventListener('DOMContentLoaded', function(){
    
    // class 선언(정의)
    class Score {
        
        // 생성자 -> 자바는 class 이름과 똑같이 하지만 javascript는 constructor()함수를 사용한다.
        constructor(korean, english, math) {
            // 필드(프로퍼티)의 선언과 초기화.
            // 클래스 프로퍼티들을 선언할 때는 var, const, let 키워드를 사용하지 않는다.
            this.korean = korean;
            this.english = english;
            this.math = math;
        }
        
        // 메서드 :
        // 클래스 생성자, 메서드 선언에서는 function 키워드를 사용하지 않는다.
        sum() {
            return this.korean + this.english + this.math;
        }
        
        mean() {
            return this.sum() / 3;
        }
    }
    
    // 클래스의 객체 생성 :
    const score1 = new Score(100, 90, 95);
    console.log(score1);
    console.log(score1.sum());
    console.log(score1.mean());
    
    const score2 = new Score(1, 2, 5)
    console.log(score2);
    console.log(score2.sum());
    console.log(score2.mean());
    
    // 자바스크립트 클래스 작성 연습
    // property : width, heigth.
    // method : area, perimeter
    class Rectangle {
        
        constructor(width, heigth) {
            this.width = width;
            this.heigth = heigth;
        }
        
        area() {
            return this.width * this.heigth;
        }
        // this 생략하면 안됨.
        
        perimeter() {
            return (this.width + this.heigth) * 2;
        }
        
    }
    
    
    const rec = new Rectangle(10, 20);
    console.log(rec);
    console.log(rec.area());
    console.log(rec.perimeter());
    
    
    
});
