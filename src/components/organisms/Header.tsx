import React from 'react';

import {
  EuiHeader,
  EuiHeaderBreadcrumbs,
  EuiHeaderSection,
  EuiHeaderSectionItem,
  EuiHeaderLogo,
  EuiAvatar,
} from '@elastic/eui';

import acnhLogo from '../../assets/images/acnhThriftLogo.png'
import avatar from '../../assets/images/stiches.png'

interface Breadcrumb {
  text: string // text that will appear as the breadcrumb
  href?: string 
  onClick?: VoidFunction
}

export default (props: {
  breadcrumbs?: [Breadcrumb]
  isLoggedIn: boolean
} = { isLoggedIn: false }) => {
  const styles = {
    logo: {
      height: '30px',
      margin: '10px',
    },
    avatar: {
      padding: '0 10px',
    }
  }

  return (
    <EuiHeader>
      <EuiHeaderSection grow={false}>
        <EuiHeaderSectionItem border="right">
        <EuiHeaderLogo
            iconType={acnhLogo}
            href="/user/dashboard"
            aria-label="Go to dashboard"
          />
        </EuiHeaderSectionItem>
      </EuiHeaderSection>

      { props.breadcrumbs ? <EuiHeaderBreadcrumbs breadcrumbs={props.breadcrumbs} /> : null }

      <EuiHeaderSection side="right">
        <EuiHeaderSectionItem border="left">
          { props.isLoggedIn
          ? <div style={styles.avatar}>
              <EuiAvatar imageUrl={avatar} name="Alice Goldfuss" size="m"/>
            </div>
          : <EuiHeaderLogo
            iconType="user"
            href="/user/dashboard"
            aria-label="Go to dashboard"
          />
          }
          </EuiHeaderSectionItem>
          </EuiHeaderSection>
    </EuiHeader>
  );
};
