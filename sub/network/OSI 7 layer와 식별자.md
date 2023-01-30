OSI 7 layer Data Link(L2)계층을 Ethernet(무선 네트워크)이라고 한다.
Network(L3)계층에서는 주로 Internet 개념에 대해 얘기한다.
3층에 해당하는 프로토콜이 인터넷만 있는 것은 아니다.

인터넷 프로로콜 기반으로 돌아가는 4계층인 TCP, UDP
5층에서 굉장히 유명한 프로토콜 SSL (TLS)
7층에는 가장 유명한 것이 바로 HTTP이다.
이 L5의 SSL과 L7의 HTTP를 합친게 바로 HTTPS이다.

![](https://velog.velcdn.com/images/ninto_2/post/f76113dc-1406-4a38-8889-505e2fdbeb66/image.png)

- L5, L6, L7 -> S/W(User mode) -> 브라우저(대표적 크롬)
- L3, L4 -> S/W(Kernel mode) -> 드라이버 / 프로토콜(TCP/ IP)
- L1, L2 -> H/W -> NIC

식별자: 어떤 대상을 식별하며(이름이나 학번이나 반 번호나 주민등록번호나 ), 식별의 대상이 되는 근거가 있는데
L2에서 사용하는 식별자가 **MAC 주소**(NIC를 식별한다. - **랜카드**의 수와 MAC address의 수는 동일하다)
L3에서 사용하는 식별자 **IP 주소**(버전이 v4와 v6가 있다.) - 인터넷을 사용하는 컴퓨터에 붙음
(**host**에 대한 식별자)
L4 식별자 **Port 번호** 경우에 따라 크게 3가지를 식별하는 걸로 다름

- 주로 L2계층에서 Port번호는 인터페이스 식별자
- L4계층(네트워크 수준)에서 Port -> 네트워크 서비스
- L5이상 계층(pc나 서버관리)에서 Port -> 프로세스

```
//터미널 열어서 아래 명령어 입력하면
ipconfig /all //컴퓨터 인터페이스 정보가 나열됨
...
물리적 주소 88-36-6C-F5-E8-3E   // Mac address 48비트정도(16진수로 표기되있음)
IPv4주소 192.168.50.14 //IP주소의 생김새
```

미국의 DoD에서는 OSI 7 layer를 4계층으로 구분한다.

- 나머지 App계층
- L4 host to host
- L3 Internet
- L1,L2를 합쳐서 Network Access
