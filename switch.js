/**
 * switch.js
 * 03_switch.html에 포함.
 */

//DOM : Document Object Model
// DOMContentLoaded(이벤트이름) : HTML 문서의 모든 요소(element)들이 만들어졌을 때 발생하는 이벤트.
// 이벤트 처리 함수를 등록.
// 함수 내부 코드들은 이벤트가 발생한 이후에 실행된다.
// 별도의 js문서를 작성할 때 이 코드부터 실행하면 안전하게 실행할 수 있다.
// html의 코드들이 전부 다 실행된 뒤 실행이 끝나면 DOM이라는 이벤트가 발생하게 되고 그 후 
//          js가 실행된다.
document.addEventListener('DOMContentLoaded', function() {
    // select#weekday element를 찾음.
    const weekday = document.getElementById('weekday');
    console.log(weekday);
    
    // div#result element를 찾음.
    const result = document.getElementById('result');
    
    //button#btn element를 찾음.
    const btn = document.getElementById('btn');
    btn.addEventListener('click', printResult);
     
    
    function printResult() {
        const value = weekday.value; // select에서 선택된 값을 읽음.
        
        switch (value) {
            case 'mon':
            case 'tue':
            case 'wed':
            case 'thu':
            case 'fri':
                result.innerHTML = '학원 출석';
                break;
            case 'sat':
            case 'sun':
                result.innerHTML = '캠핑';
                break;
            default:
                result.innerHTML = '몰라요';
        }
    }
    
    // 자바스크립트의 switch-case에서 비교는 ===연산자 비교이다.
    // 타입을 자동 변화하지 않고, 타입과 값이 일치하는 case의 문장을 실행.
        
});

