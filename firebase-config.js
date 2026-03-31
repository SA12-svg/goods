// =============================================
// MOMENTO Firebase 설정
// =============================================
// TODO: Firebase 콘솔(https://console.firebase.google.com)에서
// 프로젝트 생성 후 아래 값을 교체하세요

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Firebase SDK (CDN 방식 - index.html에서 로드)
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// =============================================
// 카카오 로그인 설정
// https://developers.kakao.com 에서 앱 생성 후 교체
// =============================================
const KAKAO_JS_KEY = "YOUR_KAKAO_JS_KEY";

// =============================================
// 네이버 로그인 설정
// https://developers.naver.com 에서 앱 생성 후 교체
// =============================================
const NAVER_CLIENT_ID = "YOUR_NAVER_CLIENT_ID";
const NAVER_CALLBACK_URL = "https://SA12-svg.github.io/goods/auth-callback.html";
