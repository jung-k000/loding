// ADRA 로딩화면 - 기본 버전
//
// ⓒ 2019. AlDeRAn All rights reserved.
// 저작자: AlDeRAn(https://steamcommunity.com/profiles/76561198128012369/)

//로고 설정
// images\logo 폴더에 이미지를 넣어주고 아래 파일명과 확장자를 적어주세요.
// 비활성화 방법: "" 공백 유지.
var logo = "logo.png";

// 음악 또는 영상 중 어떤 방법으로 재생할지 선택합니다.
// "v" 영상을 재생합니다.
// "a" 음악을 재생합니다.
var play_type = "a";

// 서버 정보 출력
// m - 맵
// n - 서버 이름
// g - 게임 모드
// s - 플레이어 고유번호
// 위 리스트에 따라 조합이 가능합니다. 순서는 상관 없습니다. 중복 가능합니다. s 중복 금지.
// Ex. "mng" 또는 ""(공백), "msg"(여러분이 생각하는 그 글자 맞습니다 ㅇㅅㅇ..)
// 로고 미설정시 출력되지 않습니다. 추후 개선 예정.
var server_info = "sgm";

// 내용 수정
var text = {
    load_start: "다운로드중...", // 다운로드 시작
    load_end: "다운로드 완료.. 접속시도중..", // 다운로드 끝나고
    server_info_t: "어서오세요. ", // 서버 정보 - 머리말
    server_info_m: "플레이중인 맵은 {0} 입니다. ", // 서버 정보 - 맵
    server_info_n: "접속중인 서버는 {0} 입니다. ", // 서버 정보 - 서버 이름
    server_info_g: "현재 {0} 에서 진행되고 있습니다. ", // 서버 정보 - 게임 모드
    server_info_s: "당신의 고유번호는 STEAM_0:{0}:{1} 입니다. 처음 접속시 다소 시간이 소요됩니다." // 서버 정보 - 플레이어 고유번호
};

// 영상 리스트
// 영상은 webm 확장자만 지원합니다. (게리모드는 MP4를 거부합니다 ㅡㅅㅡ)
// 음악 리스트와 달리 영상 리스트는 기본값 .webm 로 정의 되어있어 파일 이름만 적어주시면 됩니다.
var video_list = [
    "video"
];

// 영상 볼륨
// 0에서 1사이 값
var video_volume = 0.2;

// 음악 리스트
// EX. "filename.ogg"
// 다중 추가시 끝에 ,(반점)을 추가하셔야 합니다. (마지막 줄은 해도 안해도 상관없지만 안하는 것이 원칙입니다.)
// 파일명과 확장자를 적어주세요.
var audio_list = [
    "Diamond Eyes - Flutter.mp3",
    "Lost Sky - Dreams.mp3",
    "Tobu - Roots _NCS Release_.mp3",
    "Afterlife Ticket.ogg"
];

// 음악 볼륨
// 0에서 1사이 값
var audio_volume = 0.15;

// 사진 리스트
// 다중 추가시 끝에 ,(반점)을 추가하셔야 합니다. (마지막 줄은 해도 안해도 상관없지만 안하는 것이 원칙입니다.)
// 파일명과 확장자를 적어주세요.
var img_list = [
    "1.jpg",
    "2.jpg",
];

// 사진 변경 시간
// 1000 = 1초
var img_duration = 7000;

// 사진 전환 시간
// 1000 = 1초
var img_fade = 3000;