import { useAppDispatch } from 'app/hooks';
import { LoadingButton, MessageError } from 'components/base';
import { yupResolver } from '@hookform/resolvers/yup';
import routesMap from 'layouts/routesMap';
import { actionAuthLogin } from 'redux/auth/actions';
import { unwrapResult } from '@reduxjs/toolkit';
import { setStorageData, STORAGE_KEY } from 'utils/storage';
import { toastError, toastSuccess } from 'utils/toastify';
import React, { useState } from 'react';
import { Form, Image } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { BsFacebook, BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { getMessageError } from 'utils/common';
import * as yup from 'yup';

interface FormLogin {
  username: string;
  password: string;
}

const schema = yup.object({
  username: yup.string().required('Vui lòng nhập tài khoản'),
  password: yup.string().required('Vui lòng nhập mật khẩu').min(5, 'Mật khẩu tối thiểu 5 ký tự'),
});

const DangNhapPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLogin>({ resolver: yupResolver(schema) });

  const onSubmit = async (data: FormLogin): Promise<void> => {
    try {
      setLoading(true);
      const response = await dispatch(actionAuthLogin(data));
      setLoading(false);

      const fakeToken = unwrapResult(response);
      setStorageData(STORAGE_KEY.ACCESS_TOKEN, fakeToken);

      toastSuccess('Đăng nhập thành công');
      navigate(routesMap.HOME);
    } catch (error) {
      setLoading(false);
      toastError(getMessageError(error));
    }
  };

  return (
    <div className="vw-100 vh-100 d-flex">
      <div className="w-50 bg-light d-flex align-items-center justify-content-center">
        <div className="bg-white p-4 rounded-4 shadow-lg" style={{ width: 500 }}>
          <div className="text-center">
            <h4 className="text-secondary">Minh Khải Logistics</h4>
            <h5 className="m-0 fst-italic" style={{ fontSize: 13 }}>
              Nhanh, Hiệu quả, Chuyên nghiệp
            </h5>
          </div>
          <hr />

          <Form onSubmit={handleSubmit(onSubmit)} className="mt-5">
            <Form.FloatingLabel controlId="username" label="Tài khoản">
              <Form.Control
                {...register('username')}
                placeholder="Tài khoản"
                isInvalid={Boolean(errors.username?.message)}
              />
            </Form.FloatingLabel>
            <MessageError text={errors.username?.message} />
            <br />

            <Form.FloatingLabel controlId="password" label="Mật khẩu">
              <Form.Control
                {...register('password')}
                type="password"
                placeholder="Mật khẩu"
                isInvalid={Boolean(errors.password?.message)}
              />
            </Form.FloatingLabel>
            <MessageError text={errors.password?.message} />
            <br />

            <div className="text-center">
              <LoadingButton variant="primary" loading={loading} type="submit">
                Đăng nhập
              </LoadingButton>
            </div>
          </Form>

          <p className="text-center mt-3 opacity-75" style={{ fontSize: 13 }}>
            hoặc
          </p>

          <div className="d-flex justify-content-center gap-5">
            <BsFacebook color="blue" size={25} className="pointer" />
            <BsGoogle color="red" size={25} className="pointer" />
          </div>
        </div>
      </div>

      <div className="w-50">
        <Image
          className="w-100 h-100"
          style={{ objectFit: 'cover' }}
          src="https://images.unsplash.com/photo-1658572352229-14bbe60b3c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          alt="img"
        />
      </div>
    </div>
  );
};

export default DangNhapPage;
