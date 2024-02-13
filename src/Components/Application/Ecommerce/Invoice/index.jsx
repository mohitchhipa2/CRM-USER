import React, { Fragment } from 'react';
import PrintComponent from './Print';
import { Breadcrumbs } from '../../../../AbstractElements';

const InvoiceContain = () => {
  return (
    <Fragment>
      <Breadcrumbs parent='Follow Up' title='Follow Up' mainTitle='Follow Up' />
      <PrintComponent />
    </Fragment>
  );
};
export default InvoiceContain;
