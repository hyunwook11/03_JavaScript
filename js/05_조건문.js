// 두 수 A, B를 입력 받아 A가 B의 배수가 맞는지 확인

// input 요소에 작성된 값 얻어오기 : input요소.value
//html 요소에 작성된 내용 얻어오기 : html 요소.innerText
function check4(){
    //id가 inputA, inputB인 요소를 얻어와 변수에 저장
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
   
    // 1) A, B 중 하나라도 입력되지 않을 경우
    // ->"입력되지 않은 값이 존재합니다"

    // "string".length : 문자열의 길이 반환

    //inputA 또는 inputB 중 하나라도 입력되지 않은 경우
    if(inputA.value.length == 0 || inputB.value.length === 0){
        alert("ㅇ비력되지 않은 값이 존재합니다.");
        return; //함수를 즉시 종료하고 호출한 곳으로 돌아감
                // -> 함수를 수행할 수 없는 상태여서 미리 종료
    }
    // 위 if문을 건너 뜀 == 둘 다 입력된 상태
    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value);

   // 2) A가 B 보다 작을 경우
      //  -> A가 B보다 작습니다

      if(v1 < v2){
        alert("A가 B보다 작습니다");
        return;
      }
      //위 if문 건너뜀
      // == A,B가 모두 입력됨 + A가 B보다 크거나 같음

     // 3) A가 B보다 클 경우
     //   -> 배수 판별 수행

     if(v1 % v2 === 0){ // A가 B의 배수가 맞을 경우
        alert(`${v1}은 ${v2}의 배수가 맞습니다`);
        return;

     }
     alert(`${v1}은 ${v2}의 배수가 아닙니다`);
}

/** 입력된 수가 3,4,5의 배수가 맞는지 확인 */
function check5(){
    const input5 = document.getElementById("input5");

    //입력된 값이 없을 경우
    if(input5.value.length === 0){

        alert("숫자를 입력 해주세요");
        return;

    }

    let result; // 결과 저장용 변수
    switch( Number(input5. value) ){

        case 3 : result = "3이 입력 되었습니다"; break;
        case 4 : result = "입력된 숫자는 4입니다"; break;
        case 5 : result = "5를 입력하셨니다"; break;
        default : result = "3,4,5가 아닌 다른 숫자가 입력 되었습니다";
        
    }
    alert(result);

    // switch 문 -> if else문으로 변경
    let result2;
    if ( Number(input5.value) === 3){
        result2 = "3이 입력 되었습니다";

        
    } else if( Number(input5.value) === 4 ){
        result2 = "입력된 숫자는 4입니다.";
    

    } else if( Number(input5.value) === 5 ){
        result2 = "5를 입력하셨습니다.";
    

    } else {
        result2 = "3,4,5가 아닌 다른 숫자를 입력하셨습니다.";
    }
    alert(result2);
}

//매개 변수(parameter)
// - 함수가 호출될 때 전달된 값(전달 인자, argument)을 저장하기 위한 변수


// switch문을 이용한 계산기

function calc(op){
    console.log("매개 변수 op  확인 : ", op, typeof op);

    // 숫자가 입력되는 input 요소 얻어와 변수에 저장
    const number1 = document.getElementById("number1");
    const number2 = document.getElementById("number2");

    // 숫자가 둘 중 하나라도 입력되지 않은 경우
    if(number1.value.length === 0 || number2.value.length === 0){
        alert("숫자를 모두 입력 해주세요");
        return; // 함수 종료

    }

    //number 타입을 입력 받은 값 변경
    const n1 = Number(number1.value);
    const n2 = Number(number2.value);

    
    // 전달 받은 매개 변수(op) 값에 따라 서로 다른 연산 수행
    let result;
    switch(op){
        // 전달 받은 매개 변수가 '+'인 경우
        case '+' : result = n1 + n2; break;
        case '-' : result = n1 - n2; break;
        case '*' : result = n1 * n2; break;
        case '/' : result = n1 / n2; break;
        case '%' : result = n1 % n2; break;
        default : result = "잘못된 연산자";
    }
    //결과를 #calcResult 요소의 내용으로 출력
    document.getElementById("calcResult").innerText = result;
}

/**입력 받은 월(달)의 알맞은 계절 출력(break; 관련 예제) */
function check6(){
    const input6 = document.getElementById("input6");

    if(input6.value.length === 0){
        alert("월(달)을 입력해 주세요")
        return;
    }

    //break(멈추다) : 현재 case 까지만 해석하고 switch문을 멈춤

    // -> break 미작성 시
    //    현재 case 수행 후 멈추지 않고
    //    다음 case를 연달아서 수행

    // (break 또는 switch 끝) 를 만날때 까지 계속 연달아 수행)
    let result;
    switch( Number(input6.value)){
        case 3 : 
        case 4 : 
        case 5 : result = "봄"; break;

        case 6 : 
        case 7 : 
        case 8 : result = "여름"; break;
        case 9 : 
        case 10 : 
        case 11 : result = "가을"; break;
        case 12 : 
        case 1 : 
        case 2 : result = "겨울"; break;
       default : result = "잘못 입력";
    }
    alert(result);
}