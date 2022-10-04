import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { FaHome, FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

type HeaderPageProps = {
  breadcrumb: string[];
  isBack?: boolean;
};

const HeaderPage: React.FC<HeaderPageProps> = ({ breadcrumb, isBack }) => {
  const navigate = useNavigate();

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="mb-1 d-flex align-items-center">
        {isBack && <FaArrowLeft size={20} className="me-3 pointer" onClick={onGoBack} />}
        <h5 className="m-0 fw-semibold text-primary">{breadcrumb[breadcrumb.length - 1]}</h5>
      </div>

      <Breadcrumb as={'div'}>
        <Breadcrumb.Item linkAs="span">
          <FaHome className="mb-1 text-secondary" />
        </Breadcrumb.Item>
        {breadcrumb.map((name, index) => (
          <Breadcrumb.Item
            key={index}
            linkAs="span"
            style={{ fontSize: 14 }}
            active={breadcrumb.length - 1 === index}
            className={breadcrumb.length - 1 === index ? 'text-primary' : 'text-secondary'}
          >
            {name}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </>
  );
};

export default HeaderPage;
