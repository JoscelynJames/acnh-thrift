import React from 'react';

export default (props: { styles?: any }) => {
  const styles = { width: '24px', ...props.styles };

  return (
    <div style={styles}>
      <svg viewBox="0 0 28 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.9934 22.0098L11.6408 32.6813C6.40919 36.8623 -1.14271 32.0159 0.478848 25.5181L2.01653 19.3565C2.30952 18.1824 2.29316 16.9525 1.96905 15.7866L0.322258 9.86297C-1.39243 3.69508 5.3876 -1.34812 10.8018 2.06795L24.3584 10.6215C28.429 13.1898 28.7532 19.005 24.9934 22.0098Z" fill="#8ED8FF"/>
      </svg>
    </div>
  );
};

