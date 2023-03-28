import React from 'react';
import { Helmet } from 'react-helmet';

function Error() {
  return (
    <>
      <Helmet>
        <title>Error</title>
        <meta name="description" content="Description" />
        <meta name="theme-color" content="#008f68" />
      </Helmet>
      <div>This is the Error page</div>
    </>
  );
}

export default Error;
