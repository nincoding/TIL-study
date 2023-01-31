**URL과 URI**

- URL: Uniform(통합) **Resource** Locator(위치 지정자)
- URI: Uniform Resource Identifier(식별자)

URI의 부분집합이 URL이다.

Domain name(naver.com) + host name(www-)

리소스란 무엇인가?
Web -> HTML + HTTP프로토콜
리소스의 본질은 File이다.
File이라는게 저장된 위치 하나를 Resource Locator라고 본다.
요즘 문서들이 HTML + CSS + ~.jpg + .js ~....엄청 종류들
결국 이 파일들이 리소스이다.

그런데 이 둘의 개념적인 설명을 살펴보자면
보통 `www.naver.com`이라는걸 URL주소라고 많이 얘기한다.
URL이라는건 URI라는 큰 범주안에 포함된 개념이라고 볼 수 있다.

식별자로 보는게 조금 더 포괄적인 개념이다.
위치로 말을 하게되면 이 file을 특정하는 수순까지 가게 된다.

이 모든 것이 기술하는 표준이 있다.

**URI 구조**

```
URI = scheme ":".["//" authority]
path["?" query] ["#" fragment]
```

솔직히 웹에서는 userinfo 이런거 안쓰고 `http://www.naver.com:80.-`이런식으로 간다.
그래서 이 뒤에 query가 오고 fragment올 수 있는데 보통 이게 다 주소창에 나옴 (안 나올때도 있음)

이 구조를 알아보기 어렵게 보지말고 쉽게 보자면,

```
Protocol://Address:Port
number/Path(or filename)?Parameter=value

//아래와 같은 의미임

http://www.test.co.kr/course.do?cmd=search&search_keyword=Test

//여기서 중요한게 http://www.test.co.kr까지 만 오게되도 이걸 host로 식별할 수 가 있게됨
//이 뒤부터가 경로(쉽게말해서 파일 경로)개념이 나옴
```

예를들어 `C:Programfile/data/a.txt`
경로를 다 쓰면 절대경로라는데 하는데, 여기서 바로 앞에걸 기준으로 두고 다음에 오는걸 밑에 있는 폴더에 txt파일 있다고 말을 하는건 상대경로 개념이고, `C:Programfile/data/a.txt`이러면 절대경로.
절대든 상대든 경로개념을 쓸 때 Window 운영체제를 쓰고있는 어떤 PC같은데서 C드라이브라는 걸로 드라이브를 식별하고, 다시 넘어가서 프로그램파일폴더 식별하고 이런 방식

이게 외부로 넘어가면 확장이 된다.

![](https://velog.velcdn.com/images/ninto_2/post/535ae401-194a-4f2e-82b2-b06812657a48/image.png)

웹에서 보통 주소 쓸때 `www.test.co.kr` 입력하면 뒤에 생략되는게 바로 `~/index.html`이 파일 달라는거임
(쉽게 말해서 이 html파일을 수신받겠다란 의미)
우리가 브라우저 주소창에 주소를 쓸 때 서버 컴퓨터에 저장되있는 절대경로 까지 작성하지 않는다.
웹 서버라는게 존재한다면 얘가 잡고있는 어떠한 기준점이 있고 거기에서 상대적인 위치를 표현하는 것이다.

그래서 URL이라고 하는 건 쉽게 생각해서 리소스 파일인데 경우에 따라 실행파일일 수 도 있다.
백엔드 개발에선 `course.do`이거 하나로 하나의 리퀘스트가 되면서 실행되는 프로그램이 연결된다.
그래서 이런 처리가 이루어지는 로직들이 보통 Java로 많이 구현한다.
이 리퀘스트때문에 얘가 html이라던가 JSON파일을 생성해버린다.
그래서 클라이언트 입장에서는 뭔가 날라오는건 똑같은거임

URL의 문법중에서 한가지 기억해야 한건 `?`가 나오고 그 뒤에 매개변수들이 쭉 나온다.
`?cmd=search&search_keyword=Test` 만약에 여러개가 있으면 `&`로 구분지음

`:Port number` 얘는 Web같은 경우엔 TCP 80번을 사용함 //포트번호 안쓰면 TCP 80임
가끔 80번 안쓰는 애들이 있는데 접속할때 www.~~~.kr:8080 //원래는 이런식으로 포트번호 써야됨
