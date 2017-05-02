import { IDependencies } from 'shared/types/app';
import { takeLatest } from 'redux-saga/effects';
import { put } from 'redux-saga/effects';
import { ICategoriesResponse } from 'shared/api/Api';
import getErrorMsg from 'shared/helpers/getErrorMessage';
import { call } from 'redux-saga/effects';

function getSaga({ api }: IDependencies) {
  function* executeCategoriesLoading() {
    try {
      const response: ICategoriesResponse = yield call(api.loadCategories);
      yield put({ type: 'CATEGORY_SELECT:LOAD_CATEGORIES_COMPLETED', payload: response });
    } catch (error) {
      const message = getErrorMsg(error);
      yield put({ type: 'CATEGORY_SELECT:LOAD_CATEGORIES_FAILED', payload: message });
    }
  }

  function* saga() {
    yield [
      takeLatest('CATEGORY_SELECT:LOAD_CATEGORIES', executeCategoriesLoading),
    ];
  }

  return saga;
}

export default getSaga;
