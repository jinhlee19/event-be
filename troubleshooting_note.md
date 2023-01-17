### Trouble Shootings

01.18.23
localhost:1337/api/events 로 연결하면 이미지가 보이지 않는다.
이에, http://localhost:1337/api/events?[populate]=\* 를 걸어주면서 해결되었다.
