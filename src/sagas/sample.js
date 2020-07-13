import {all, put, takeLatest, take} from 'redux-saga/effects';

import {
  loginSuccess,
  loginFaliure,
  signupSuccess,
  signupFaliure,
} from '../actions/';

import {doPost, doGet} from '../utils/request';

//Middleware used to perform async tasks..
// Axios used for HTTP calls


function* loginRequest(obj) {
  const response = yield doPost(obj.data, 'https://reqres.in/api/login');
  console.log("Login Request Working", response)
  if (response.status === 201) {
    yield put(loginSuccess(response));
  } else if (response.status === 400) {
    yield put(loginFaliure(response));
  } else {
    yield put(loginFaliure(response));
  }
}

function* signupRequest(obj) {
  console.log("Request is working Sign up")
  const response = yield doPost(obj.data, 'https://reqres.in/api/register');
  console.log("Sign up Api response", response)
  if (response.status === 201) {
    yield put(signupSuccess(response));
  } else if (response.status === 400) {
    yield put(signupFaliure(response));
  } else {
    yield put(signupFaliure(response));
  }
}

export default function* watcher() {
  yield all([takeLatest('LOGIN_REQUEST', loginRequest)]);
  yield all([takeLatest('SIGNUP_REQUEST', signupRequest)]);
}
