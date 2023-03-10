**HTTP**

- HTTP는 **HTML 문서를 전송 받기 위해** 만들어진 응용 프로그램 계층 통신 프로토콜이다.
  (정확히는 L7계층에 속하는 프로토콜)
- 1996년에 1.0스펙이 발표됐으며 1999년 6월에 1.1이 발표됐다.
- 기본적으로 클라이언트의 요청에 대응하는 응답형식으로 작동한다.

- **헤더**는 다음과 같이 분류한다.
  - 일반 헤더
  - 요청 헤더
  - 응답 헤더
  - 엔티티 헤더
- 요청에 사용되는 메서드는 주로 GET, POST이다.

TCP를 이야기할 때 보통 단위로 데이터가 잘라지는데, 보통 IP 네트워크인 경우 MTU가 1500이다.

```
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ//단위
|헤더| Payload             |
ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
```

중요한건 이게 단위 데이터로 딱딱 잘라지다 보니까 끊어서 생각하기가 좋았는데
근데 L7 (즉, L5 이상이다라고 하면 이때는 Socket 통신을 한다 - Socket통신은 Stream데이터다)
(그러니까 시작은 있는데 -> 끝이 언제인지는 해석을 해야됨)
(이 해석하는 규정이 바로 HTTP에 들어있다.)
문제가 뭐냐면, 이 프로토콜이
IP나 TCP배울때는 16진수로 막 나왔지만, 얘는 재밌는게 모두 문자열로 되있음
그래서 이걸 이해하기가 생각보다 직관성이 뛰어나서 쉽다.
심지어 이 Header라는 부분도 문자열로 되있다.
이 헤더에는 뭐가 있고, 이런 부분을 디테일하게 공부해야 하는데 사실 이것만 놓고도 책 한권은 나온다..
하지만 핵심만 찍고 넘어가면 기본 원리는 간단하다.
(요청과 응답)
요청: 리퀘스트가 날라가면 HTML문서를 요청하는거
응답: 서버쪽에선 리스폰스해서 보내줌 이 HTML문서를 리스폰스해서 보내줌

이때 요청이라는 걸 때 뭔가 오퍼레이션 요청이 있는데 요청이 '주세요' 요청말고 여러가지 요청이 있다.
이 요청이라는 걸 다른말로 메서드(요청하기 위한 방법들) 문자열로 GET, POST이렇게 되있는게 제일 흔하다.
GET: 달라는거 (얘는 다운로드 개념이라면)
POST: 달라는 거긴한데 약간 방향성이 다름 (얘는 업로드 개념임- 클라이언트에서 서버로 뭔가가 날라간다)

![](https://velog.velcdn.com/images/ninto_2/post/2cb54e13-f96e-4b28-a65b-db1692324c67/image.png)

**HTTP 응답 코드**

```
// 당연히 리소스(파일)에 대한 리퀘스트
클라이언트 --(리퀘스트)--> 서버 // 서버에서 그런파일 없다고 답장함

// html에 a.jpg파일 줘 -> 그런 파일 없어 이런 상황
// 이미지에 x가 찍혀서 나옴 (이래서 404에러나옴)
```

- 200 OK : 요청이 정상적으로 처리 됨
- 201 Create: 요청에 대한 새로운 자원을 생성하는데 성공함
- 301 Moved permanently
- 302 Found
- **400 Bad requesr** : HTTP 규약에 맞지 않는 요청
- 403 Forbidden : 권한이 없거나 잘못된 파일 실행 접근시도
- **404 Not found**
- **500 Internal server error** : 내부 오류 때문에 요청을 처리할 수 없음
  (정말 백엔드 이쪽에서 뭔가 심각한 오류가 발생했다는 거- 서버 사이드 시스템에서 내부적으로 심각한 오류가 일어났다.)

이렇게 응답코드가 여러개 가 있는 이유가 HTTP에는 다양한 메서드가 있기 때문이다.
(대표적으로 GET, POST가 있다)

- GET : 다운로드에 가깝다 (뭐 줘!!!)
- POST: 업로드 성격이 강하다 (뭐 주세요) ex. 파일을 업로드한다거나 어디 로그인한다거나...(이런 경우 기본적으로 거의다 POST임)
- HEAD: 헤드는 뭔가 하는데 데이터 영역은 떼고 무엇만 보내는것
- TRACE
- PUT: 리소스를 새로 업로드
- DELETE : 지우는거
- OPTIONS
- CONNECT

PUT과 DELETE같은 이런것은 사실 문제인게 외부에서 어떤 리소스를 다른 사람이 지워버리거나, 어떤 놈이 우리 서버에 파일을 막 올려버리면
문제가 되니까 거의 안씀
실제로 웹 HTTP 메서드 이러면 거의 GET과 POST만 의미한다.
나머지는 이런게 있구나~ 하고 찾아보면 된다.
