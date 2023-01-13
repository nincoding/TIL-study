- 사용하는 용도에 따라 3~4가지 다른 뜻을 가진다.

```
function func() {
    console.log(this);
}

func(); // window {}

const obj = {
  data: 'Kim',
  func: function() {
    console.log(this); //오브젝트 안에서의 this
  }
}

obj.func(); //객체 안에 메서드 실행할땐 괄호 붙여야됨

```

- 그냥 쓰거나 일반 함수 안에서 쓰면 window 가 뜸
- window 기본 함수들 수납공간
- 스트릭트 모드에선 함수안에서 this 사용하면 undefined가 뜸
- 오브젝트 내 함수(메서드)안에서 쓰면 그 오브젝트를 뜻함
  (나를 포함하고 있는 오브젝트다!)

```
const obj = {
  data : {
    함수 : function() {
      console.log(this)
    }
  }
}

obj.data.함수(); //실행을 해보면 obj.data를 가리킴
```

화살표 함수안에서의 this는 의미가 다름
this라는 값을 새로 만들어주지 않고 상위 요소에 있는 this값을
물려받아감 (화살표 함수의 특징)

- 부모 혹은 상위요소의 this값을 그대로 사용할 수 있음

```
const obj = {
  data : {
    함수 : () => {
      console.log(this)
    }
  }
}

obj.data.함수();
```

오브젝트 안에 함수를 만들때 소괄호, 중괄호만 써도됨

```
const obj = {
  data : {
    함수() {
      console.log(this)
    }
  }
}


- 함수나 변수를 전역공간에서 만들면 window 객체(전역객체)에 보관됨
- 전역공간에 함수 만들고 window.함수() 해도 같은 결과나옴
- window 전역변수 저장소
- this는 첫번째나 두번째뜻이나 별반 다를게 없음
(나를 포함하고 있는 공간)
```

- this의 3번째 뜻 새로 생성되는 오브젝트를 뜻함
  (기계 안에서 쓰면 새로 생성되는 오브젝트를 뜻함)
- 자바스크립트는 오브젝트 생성 기계를 만들어 낼 수 있다.
  (오브젝트 생성기계 = constructor)
  constructor는 붕어빵 기계, 기계로 찍어내는 붕어빵들은 instance다

```
const obj = {};
function 기계() {
  this.name = 'Kim' //이 함수안에서 this를 쓰면 새로 생성되는 오브젝트를 뜻함(instance)
}

const obj1 = new 기계(); //새로생성되는 오브젝트에는 이름 kim이라고 설정해주세요. //{이름: 'Kim'};

```

이벤트리스너 문법- HTML요소를 찾아서 그걸 클릭하면 안에 있는 코드를 실행해주세요 라는 뜻

```
<div></div>
<button id = '버튼'>버튼</button>
<script>
//아이디가 버튼인거 찾아주세요 -> 그걸 클릭하면 -> 실행해줌
document.getElementById('버튼').addEventListener('click', function() {
  this; // e.currentTarget; //HTML 태그가 나옴
})
</script>
```

이벤트 리스너 안에서 this를 사용하면 e.currentTarget 이라는 뜻이 됨.

- 지금 이벤트가 동작하고 있는 곳을 뜻함
- document.getElementById('버튼') 이랑 this 랑 e.currentTarget 뜻이 거의 비슷함

버튼을 누르는 순간 반복문을 쓴다면

```
<div></div>
<button id = '버튼'>버튼</button>
<script>
//아이디가 버튼인거 찾아주세요 -> 그걸 클릭하면 -> 실행해줌
document.getElementById('버튼').addEventListener('click', () => {
  let arr = [1,2,3];
  arr.forEach((a) => {
    console.log(a) // 1, 2, 3 총 3번에 걸쳐나옴
  })
})
</script>
```

forEach는 반복문처럼 하나하나 요소 지나면서 반복함 안에있는 코드 실행됨 - 내부 코드가 3번 반복
forEach안에는 콜백함수가 들어감 - 함수안에 함수 집어넣을 수 있음
인자 파라미터 형태로 함수가 들어가는 걸 콜백함수라 함
자바스크립트에선 뭔가 순차적으로 실행하고 싶을때 콜백함수 많이 씀

```
<div></div>
<button id = '버튼'>버튼</button>
<script>
//아이디가 버튼인거 찾아주세요 -> 그걸 클릭하면 -> 실행해줌
document.getElementById('버튼').addEventListener('click', () => {
  let arr = [1,2,3];
  arr.forEach(function (a) {
    console.log(this) // 여기서 this를 사용하면 뭐가 나올까
  }) //여기서 this사용하면 window가 나옴 (전역함수기 때문 - 일반함수)
})
</script>
```

this의 뜻은 함수가 쓰인 위치에 따라 변한다.

- 오브젝트 내에서 콜백함수 썼을때 this는?

```
const obj = {
  names : ['김', '이', '박'];
  func : function() {
    console.log(this) //여기서 this는 obj가 나옴(이 함수의 주인을 출력해줌)
    obj.names.forEach(function() {
      console.log(this) //여기서 this 값은 뭐가 나올까?
    })//여기서 this값은 window가 된다. (this가 사용된 함수는 전역함수임 즉 일반함수 window)
  }
}
obj.func();
```

this의 바로 위에 있는 함수를 잘 보면 쉽게 파악할 수 있음
하지만 화살표 함수에서는 this가 다르게 출력됨

```

const obj = {
  names : ['김', '이', '박'];
  func : function() {
    obj.names.forEach(() => {
      console.log(this) //화살표 함수에서 this 값은 뭐가 나올까?
    })//여기서 this는 obj를 3번 출력함(위에 있는 this 값을 그대로 물려받음)
  }
}
obj.func();
```

**화살표 함수는 내부의 this값을 변화시키지 않음 (외부 this 값을 그대로 재사용가능)**
예전에는 this값을 자유롭게 갖다 쓸 수 없었기 때문에 call(), bind() 같은걸 붙여서 안에 this값을 갖다 쓰고 그랬지만 지금은 화살표 함수 쓰면 this를 상속받아서 그대로 재사용 가능함
굳이 특정 상황이 아니라면 bind나 call을 쓸 필요가 없음

innerHTML 출력 setTimeout으로 조작할때 화살표함수에 this 활용해야됨
일반함수 쓰면 전역객체가 this값에 담겨서 아무것도 출력안됨

```
<button id="버튼">버튼이에요</button>

<script>
  //근본없는 일반함수쓰면 this가 window가 나옴
  //window.innerHTML쓰면 아무것도 안나옴
  //옛날엔 이 this값을 변수에 저장했음
  document.getElementById('버튼').addEventListener('click', function (){
    setTimeout(() => {
    console.log(this.innerHTML);
  }, 1000);
  });

</script>
```
