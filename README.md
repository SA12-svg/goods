# MOMENTO v2 — 기념굿즈 커스텀 쇼핑몰

## 파일 구조
- `index.html` — 쇼핑몰 메인 (GNB 전면 개편, 메가 드롭다운, 이메일/카카오/네이버 로그인)
- `mypage.html` — 마이페이지 (주문내역, 장바구니, 회원정보)
- `admin.html` — 관리자 대시보드
- `firebase-config.js` — Firebase / 카카오 / 네이버 설정

## Firebase 연동 방법
1. https://console.firebase.google.com 에서 프로젝트 생성
2. Authentication → 이메일/비밀번호 사용 설정
3. Firestore Database 생성
4. index.html, mypage.html, admin.html 내 firebaseConfig 값 교체

## 카카오 로그인
1. https://developers.kakao.com 에서 앱 생성
2. 플랫폼 → 웹 → 사이트 도메인 추가 (https://SA12-svg.github.io)
3. index.html 내 KAKAO_JS_KEY 교체

## 네이버 로그인
1. https://developers.naver.com/apps 에서 앱 생성
2. NAVER_CLIENT_ID 교체, 콜백 URL 설정
