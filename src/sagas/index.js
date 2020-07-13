import { all } from 'redux-saga/effects';

import sampleWatcher from './sample';


export default function* rootWatchers() {
  yield all([
    sampleWatcher(),
   
  ]);
}
