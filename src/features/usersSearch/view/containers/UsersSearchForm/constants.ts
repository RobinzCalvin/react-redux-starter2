import { IUsersSearchFilters } from 'shared/types/githubSearch';
import { FormFieldNames, ISelectOption } from 'shared/types/form';
import { IUsersSearchFormFields } from '../../../namespace';

export const searchByOptions: Array<ISelectOption<IUsersSearchFilters['searchBy']>> = [
  { value: 'username-email', label: 'Username & email' },
  { value: 'login', label: 'Username' },
  { value: 'email', label: 'Email' },
  { value: 'fullname', label: 'Full name' },
];

export const searchTypeLabels: Record<IUsersSearchFilters['searchType'], string> = {
  both: 'users & organizations',
  org: 'organizations',
  user: 'users',
};

export const perPageOptions: Array<ISelectOption<IUsersSearchFilters['perPage']>> = [
  { value: 30, label: 30 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
];

export const formInitialValues: IUsersSearchFormFields = {
  searchString: '', searchBy: searchByOptions[0].value, searchType: 'both', perPage: perPageOptions[0].value,
};

export const fieldNames: FormFieldNames<IUsersSearchFormFields> = {
  searchString: 'searchString',
  searchBy: 'searchBy',
  searchType: 'searchType',
  perPage: 'perPage',
  reposLanguage: 'reposLanguage',
  maxRepos: 'maxRepos',
  minRepos: 'minRepos',
};
