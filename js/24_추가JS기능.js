/* for in 확인하기 */
const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {

    // JS 객체 생성
    const obj = {
        menu : "제육볶음",
        price : 8000,
        option : {spicy : ["기본", "안맵게","아주맵게"],
        rice : ["기본", "적게","많이"]
        }
    };


// for in구문

for(let key in obj){
    //console.log(key); // 객체의 key 출력

    //객체에 저장된 모든 값 출력하기
    console.log(`obj[${key}] : ${obj[key]}`);
    /* 만약 꺼내온 key가 "option"인 경우 */
    if(key === "option"){
        for(let key2 in obj[key]){
            console.log(key2, obj[key][key2]);
        }
    }
}
// obj[key] === obj["option"]
//spicy : ["기본", "안맵게","아주맵게"],
// rice : ["기본", "적게","많이"]

// key2 === rice, spicy
console.log(obj["menu"]);
// menu가 문자열이 아닌 변수명으로 인식되어 오류
// -> 해결 방법 : 문자열로 인식할 수 있게 "", '' 감싸기
// (참고 : JS객체의 key는 모두 string 자료형이다)
});


/* 구조 분해 할당 */

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {

   // [객체 + 구조 분해 할당]
    const person = {name : "홍길동", age : 25, height : 180};

    // 기존 방법
    // const name = person.name;
    // const age = person.age;
    // const height = person.height;

    //구조 분해 할당
    const {name, age, height} = person;

//     console.log("first :", first);
//     console.log("second :", second);
//     console.log("third :", third);

console.log("name :", name);
     console.log("age :", age);
     console.log("height :", height);
});

/*  배열 + ....연산자*/
const btn3 = document.querySelector("#btn3");

btn3.addEventListener("click", () => {


    const arr = [10, 20, 30];
    const copy1 = arr;

    console.log("arr :" , arr) 
    console.log("copy1 :" , copy1) 

    copy1[0] = 999; //복사본에 0번 인덱스에 999대입

    console.log(" copy1[0] = 999");
    console.log(" arr :",  arr);
    console.log(" copy1 :",  copy1);

    // 왜 arr[0]이 999로 변했을까
    // -> 얕은 복사가 되었기 때문

    // * 얕은 복사
    // - 같은 주소를 복사하여 저장한

    // 여러 변수가 하나의 객체를 참조하는 것

// * 깊은 복사
// - 객체의 모양과 저장된 값을 그대로 복사 == 복제

// ** 전개 연산자 사용!! **
const copy2 = [...arr]; // 999, 20, 30    [] = 벗겨짐
// -> arr이 참조하는 값을 얻어와 새로운 배열로 생성

copy2[1] = 1234;
console.log("copy2[1] =1234");
console.log("arr :", arr);
console.log("copy2 :", copy2);


//---------------------------------

/* 배열 결합 확인 */
const student1 = ["홍길동", "둘리", "또치"]
const student2 = ["짱구", "유리", "맹구"]

const student3 = [...student1, ...student2];
// const student4 = ["홍길동", "둘리", "또치","짱구", "유리", "맹구"];

console.log("studnet3", student3);


/* 배열 요소 추가 확인 */
const student4 = [...student3, "철수", "희동이"]
console.log("studnet4", student4);
});

/* 객체 + ...연산자 */
const btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () =>{
    /* 객체복사 */
    const obj = {id : "user01", pw : "pass01"};
    const copy1 = obj; //얕은 복사 (copy1은 obj와 같은 객체 참조)
    const copy2 = {...obj}; // 깊은 복사 (copy2은 obj 복제본 참조)

    copy1.pw = "1q2w3e4r";
    console.log("obj : ", obj);
    console.log("copy1 : ", copy1);
    console.log("copy2 : ", copy2);
    /* 객체 병합 */

    const obj2 = {id:"user02", pw:"pass02"};
    const obj3 = {email : "user02@", phone :"010-000-000"}

    const obj4 = {...obj2, ...obj3};
    console.log("obj4:" , obj4)
    /* 속성 덮어 쓰기 */
    const obj5 = {...obj4, phone:"010999996"};
    console.log("obj5:" , obj5)
});
