import React from 'react';
import { Button, ButtonProps, Spinner } from 'react-bootstrap';

interface LoadingButtonProps extends ButtonProps {
  loading?: boolean;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ loading, children, ...restProps }) => {
  return (
    <Button {...restProps} disabled={loading || restProps.disabled}>
      {loading && <Spinner animation="border" size="sm" style={{ marginRight: 5, marginBottom: -1 }} />}
      {children}
    </Button>
  );
};

export default LoadingButton;
