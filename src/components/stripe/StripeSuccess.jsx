import { useEffect } from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { stripeSuccessRequest } from '../../api/stripe/stripe';

const StripeSuccess = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    
    stripeSuccessRequest(token, params.id).then((res) => {
      if (res.data.success) {
        navigate("/dashboard/bookings");
      } else {
        navigate("/stripe/cancel");
      }
    });
  }, [params.id]);

  return (
    <div className="flex justify-center p-5">
      <LoadingOutlined className="p-5" />
    </div>
  );
};

export default StripeSuccess;
