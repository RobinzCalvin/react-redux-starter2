import { put, call } from 'redux-saga/effects';

import { SagaIterator } from 'redux-saga';
import { IDependencies } from 'shared/types/app';

import * as actionCreators from '../actionCreators';

function getSaga(deps: IDependencies) {
  return function* saga(): SagaIterator {
    yield call(() => void 0);
  };
}

export { getSaga };
