/* eslint no-restricted-imports: 0 */
import { withTranslation, useTranslation as translationHook } from 'react-i18next';

import { tKeys } from './constants';
import { LanguageSelector } from './view/LanguageSelector/LanguageSelector';
import { UseTranslation } from './namespace';

const useTranslation = translationHook as UseTranslation;

export { ITranslateKey, IConcatKey } from './helpers/buildTranslationKeys';
export { TranslateFunction, ITranslateObject, ITranslationProps, UseTranslation } from './namespace';
export { tKeys, withTranslation, useTranslation, LanguageSelector };
