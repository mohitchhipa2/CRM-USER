import React, { Fragment, useState } from 'react';
import { Container, Row } from 'reactstrap';
import { Breadcrumbs } from '../../../../AbstractElements';
// import DataTable from 'react-data-table-component';
import Email from './Email';
import MailSidebar from './MailSidebar';
const MailInboxContain = () =>
{
  // const [data, setData] = useState(dummytabledata);
  return (
    <Fragment>
      <Breadcrumbs mainTitle='Email Compose' parent='Apps' title='Email Compose' />
      <Container fluid={true}>
        
      </Container>
    </Fragment>
  );
};
export default MailInboxContain;
