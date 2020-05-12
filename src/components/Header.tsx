import React from 'react';

import {
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
} from '@elastic/eui';

import acnhLogo from '../assets/images/acnhThriftLogo.png'

interface Breadcrumb {
  text: string // text that will appear as the breadcrumb
  href?: string 
  onClick?: VoidFunction
}

export default (props: {
  breadcrumbs: [Breadcrumb?]
} = { breadcrumbs: []}) => {
  const styles = {
    logo: {
      height: '30px',
      margin: '10px',
    }
  }

  return (
    <EuiHeader>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
        <img
          src={acnhLogo}
          style={styles.logo}
        />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      { props.breadcrumbs ? <EuiHeaderBreadcrumbs breadcrumbs={props.breadcrumbs} /> : null }

      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem border="left">
          <EuiHeaderLogo
            iconType="user"
            href="/user/dashboard"
            aria-label="Go to dashboard"
          />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>
    </EuiHeader>
  );
};
