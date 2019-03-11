import React from 'react';
import { connect } from 'react-redux';
import { bind } from 'decko';

import { IAppReduxState } from 'shared/types/app';
import { SearchForm } from 'shared/view/components';

import { selectors, actions } from './../../../redux';
import { IUsersSearchFormFields } from '../../../namespace';
import { formInitialValues, fieldNames } from './constants';
import UsersSearchSettings from './UsersSearchSettings/UsersSearchSettings';

interface IOwnProps {
  onSubmit(values: IUsersSearchFormFields): void;
}

interface IStateProps {
  isUsersSearchRequesting: boolean;
}

type IActionProps = typeof mapDispatch;

type IProps = IOwnProps & IStateProps & IActionProps;

const mapDispatch = {
  searchUsers: actions.searchUsers,
  resetSearchResults: actions.resetSearchResults,
};

function mapState(state: IAppReduxState): IStateProps {
  return {
    isUsersSearchRequesting: selectors.selectCommunication(state, 'searchUser').isRequesting,
  };
}

class UsersSearchForm extends React.PureComponent<IProps> {
  public render() {
    const { isUsersSearchRequesting, resetSearchResults } = this.props;
    return (
      <SearchForm<IUsersSearchFormFields>
        isSearchRequesting={isUsersSearchRequesting}
        searchInputName={fieldNames.searchString}
        onSubmit={this.handleFormSubmit}
        initialValues={formInitialValues}
        renderSettings={UsersSearchSettings}
        resetSearchResults={resetSearchResults}
      />
    );
  }

  @bind
  private handleFormSubmit(formValues: IUsersSearchFormFields) {
    const { searchUsers, onSubmit } = this.props;
    searchUsers({ searchOptions: formValues, page: 1 });
    onSubmit(formValues);
  }
}

export { UsersSearchForm, IProps as IUsersSearchFormProps };
export default connect(mapState, mapDispatch)(UsersSearchForm);
