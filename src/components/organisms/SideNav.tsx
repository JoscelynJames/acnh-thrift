import React, { useRef } from 'react';

import { EuiNavDrawerGroup, EuiNavDrawer, EuiFocusTrap, EuiHorizontalRule } from '@elastic/eui';

export default () => {
  const userDashboardLinks = [
    {
      label: 'User Dashboard',
      iconType: 'dashboardApp',
      flyoutMenu: {
        title: 'Welcome FirstName',
        listItems: [
          {
            label: 'Settings',
            href: '#/user/dashboard/settings',
            iconType: 'gear',
          },
          {
            label: 'Open Listings',
            href: '#/user/dashboard/listings',
            iconType: 'storage',
          },
          {
            label: 'Pending Trades',
            href: '#/user/dashboard/trades',
            iconType: 'users',
          },
        ],
      },
    },
  ];

  const thriftStoreLinks = [
    {
      label: 'Listings',
      href: '#/shop',
      iconType: 'tableDensityExpanded',
    },
  ];

  const catalogLinks = [
    {
      label: 'Catalog',
      iconType: 'spacesApp',
      flyoutMenu: {
        title: 'Catalog',
        listItems: [
          {
            label: 'Under Construction',
            href: '#',
            iconType: 'wrench',
          },
        ],
      },
    },
  ];

  const navDrawerRef = useRef(null);

  return (
    <EuiFocusTrap>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100%',
          width: '100%',
        }}>

        <EuiNavDrawer ref={navDrawerRef}>
          <EuiNavDrawerGroup listItems={thriftStoreLinks} />
          <EuiHorizontalRule margin="none" />
          <EuiNavDrawerGroup listItems={userDashboardLinks} />
          <EuiNavDrawerGroup listItems={catalogLinks} />
        </EuiNavDrawer>

      </div>
    </EuiFocusTrap>
  );
};