/**
 * event.js
 * 12_event.html에 포함
 */

document.addEventListener('DOMContentLoaded', function() {
    
    const btnInput = document.getElementById('btnInput');
    const itemInput = document.getElementById('itemInput');
    const itemList = document.getElementById('itemList'); 
    
    btnInput.addEventListener('click', function() {
        // input에 입력된 값을 읽음.
        const value = itemInput.value;
        // console.log(value);
        
        // input에 입력된 값으로 li요소를 만듦.
        const item = `<li>${value}</li>`;
        // li 요소를 ul에 추가.
        itemList.innerHTML += item;
        
        // input의 값을 지운다.
        itemInput.value = '';
        
        // input에 포커스를 줌.
        itemInput.focus();
        
    });
    
    
    const divInput = document.getElementById('divInput');
    const input = document.getElementById('input');
    const list = document.getElementById('list');
    
    input.addEventListener('keydown', function(event) {
        // event -> KeyboardEvent 객체이다.
        const value = input.value;
        const item = `<li>${value}</li>`
        
        if (event.keyCode === 13){
            list.innerHTML += item;
            input.value = '';
            input.focus()
        }
        
    });
    
    const username = document.querySelector('input#username');
    const age = document.querySelector('input#age');
    const result = document.querySelector('div#result');
    // change -> 포커스가 바뀌거나 엔터를 했을때.
    username.addEventListener('change', function(e) { 
        updateNameAndAge();
    });
    
    age.addEventListener('change', function(e) {
        updateNameAndAge();
    });
    
    function updateNameAndAge() {
        const name = username.value;
        const age2 = age.value;
        const text = `<b>이름: </b> ${name}, <b>나이: </b> ${age2}`;
        result.innerHTML = text;
    }
    // 똑같은 이벤트 처리이기 때문에 함수로 만들어서 사용했다.
    
    
    
});
 
 