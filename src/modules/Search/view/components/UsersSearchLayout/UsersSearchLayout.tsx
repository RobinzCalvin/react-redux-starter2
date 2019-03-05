import React, { useState } from 'react';
import block from 'bem-cn';

import * as features from 'features';
import featureConnect from 'core/FeatureConnector';

import Layout from 'modules/shared/Layout/Layout';
import './UsersSearchLayout.scss';

interface IFeatureProps {
  usersSearchFeatureEntry: features.usersSearch.Entry;
}

type IProps = IFeatureProps;

const b = block('users-search-layout');

function UsersSearchLayout(props: IProps) {
  const [lastSubmittedFormState, setLastSubmittedFormState] =
    useState<features.usersSearch.namespace.IUsersSearchFormFields | null>(null);

  const { usersSearchFeatureEntry: { containers } } = props;
  const { UsersSearchForm, UsersSearchResults } = containers;

  return (
    <Layout title="GitHub users search">
      <div className={b()}>
        <div className={b('search-form')}>
          <UsersSearchForm onSubmit={setLastSubmittedFormState} />
        </div>
        {lastSubmittedFormState && <UsersSearchResults searchOptions={lastSubmittedFormState} />}
      </div>
    </Layout>
  );
}

export { UsersSearchLayout, IProps as IUsersSearchLayoutProps  };
export default featureConnect({
  usersSearchFeatureEntry: features.usersSearch.loadEntry,
})(UsersSearchLayout);
