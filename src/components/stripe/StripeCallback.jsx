import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getAccountStatus } from '../../api/stripe/stripe';
import { updateUserInLocalStorage } from '../../api/auth/auth';

const StripeCallback = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  useEffect(() => {
    if (auth && auth.token) accountStatus();
  }, [auth]);

  const accountStatus = async () => {
    try {
      const res = await getAccountStatus(auth.token);
      console.log(res);

      updateUserInLocalStorage(res.data, () => {
        // update user in redux
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: res.data,
        });
        // redirect user to dashboard
        window.location.href = '/dashboard/seller';
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center p-5">
      <LoadingOutlined className=" p-5" />
    </div>
  );
};

export default StripeCallback;
