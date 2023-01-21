this, prototype, class, constructor + 어렵고 불편한 문법이 많다.
자바스크립트 중급 레벨 이상에서 사용할 수 있는 ES6(2015년 이후) 이후 신문법 + 객체지향 한번 알아보자.

ES6 대규모 레볼루션 업데이트

필요한 사전지식
var function if for forEach eventListener Array Object 등..
(Array랑 Object를 만들고 내부 자료를 수정할 줄 안다)

이 강의가 필요한 이유:

- 책이나 구글을 보면 용어를 못알아듣겠다.(객체, 인스턴스, 생성자 ...)
  (이미 OOP 경험이 있다면 쉽게 알아들을 수 있는 용어다.)
- 문법설명 예제가 어려워서 잘 모르겠다.(var foor, bar, baz, myFunction().. 뭔지 모르겠는 이상한 변수명, 특히 모질라 모르겠다)
- 문법을 배워봤자 활용을 못하겠다. (문법의 용도와 목적을 알아야됨, 알아야 창작가능)

자바스크립트 쓰는 이유 ( HTML 변경을 위해서 )

- HTML에서 태그를 변경하고 싶을때,

```
//HTML <p id = 'hello'>안녕</p>
//html <button id= 'button'>버튼</button>

//이런식으로 html 텍스트를 변경할 수 있다.
document.getElementById('hello').innerHTML = '잘가';

//버튼을 눌렀을때 변경하고 싶다면 이벤트를 이용해서 바꿀 수 있음
document.getElementById('button').addEventListener('click', () => {
  document.getElementById('hello').innerHTML = '바보';
})
```

자료도 저장하고싶고, 조건도 달고싶고 여러가지 조작하기 위해서
자바스크립트엔 기본 문법들이 존재한다.

- 자료를 잠깐 저장하고 싶다면 변수를 만들어 사용하면 됨
  (선언 키워드는 용도마다 다름)

```
var name = 'kim';
let age = 20;
const gender = 'female';
```

- 코드 긴걸 짧게 축약하려면 함수를 만들어서 사용하면 된다.
  (함수 다양하게 쓰려면 파라미터로 업그레이드 해야됨)
- 파라미터 가져다 쓸때마다 그 자리에 입력을 할 수 있음
  (콤마로 여러개 집어넣을 수 있음)
- 화살표로 대체해서도 가능함 (약간 다른 기능이 있음)

```

function 작명(파라미터) {
  document.getElementById('hello').innerHTML = 파라미터;
}

document.getElementById('button').addEventListener('click', 작명());
```

여러가지 자료를 한번에 저장하고 싶다면 array나 object를 쓴다.
([], {})

```
const name = ['kim', 'park'];
const person = { name: 'kim', age: 20 };

//자료를 뽑아 쓰고 싶다면 인덱싱하면 됨
name[0] //'kim'
person.name //'kim'
person['name'] //'kim'
```

코드를 조건부로 실행하고 싶을때
(조건이 맞을때만 실행하고 싶다면 if문씀)

```
//조건식 참일때만 실행됨

if(조건식) {
  console.log('안녕');
}

//비교하고싶으면 ===, !==, >=, <=, >, <
//조건식을 여러개 쓰고싶다면 && , || 쓰면됨

//else if, else도 있음 위에께 아니면 이거 실행해주세요.
```

같은 실행을 반복적으로 실행하고 싶을땐
반복문 쓰면됨

```
//3번 반복해주세요
for(let i = 0; i < 3; i++) {
  console.log('안녕');
}

//forEach()라는 반복문도 있음 array에 붙일수있음
//파라미터 집어넣으면 이건 1,2,3,4 가 순차적으로 됨
[1,2,3,4].forEach((v)=> {
  console.log(v);
})
```
