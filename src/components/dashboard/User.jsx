import React, { useEffect, useState } from "react";
import moment from "moment/moment";
import { currencyFormatter, getAccountBalance, payoutSetting } from "../../api/stripe/stripe";
import { useSelector } from "react-redux";

import { FiSettings } from "react-icons/fi";
import dashboardImg from "/images/dashboardImg.jpg";

const User = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user, token } = auth;
  const [balance, setBalance] = useState(0);

  const handlePayoutSettings = async () => {
    try {
      const res = await payoutSetting(token);
      window.location.href = res.data.url;
    } catch (err) {
      console.log("Unable to access settings. Try again");
    }
  };

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      setBalance(res.data);
    });
  }, []);

  return (
    <div className="relative w-full md:flex md:justify-center">
      <img className="w-full rounded-3xl" src={dashboardImg} alt="hotel picture" />
      <div className="px-3 md:px-10 max-w-screen-2xl md:absolute bottom-0 ">
        <div className="md:flex mt-10 text-white ">
          <div className="border-2 bg-headerbg flex p-5">
            <img width="80" height="80" src={`https://api.multiavatar.com/${user.name[0]}.svg`} />
            <div className="ml-12">
              <h4>{user.name}</h4>
              <small>{user.email}</small> <br />
              <small>{`Joined ${moment(user.createdAt).fromNow()}`}</small>
            </div>
          </div>

          {auth?.user?.stripe_seller?.charges_enabled && (
            <div className="">
              <div className="border-2 bg-headerbg  flex p-5">
                Avaliable:{" "}
                {balance &&
                  balance.pending &&
                  balance.pending.map((bp, i) => (
                    <span key={i} className="lead">
                      {currencyFormatter(bp)}
                    </span>
                  ))}
              </div>

              <div className="border-2 bg-headerbg  flex p-5 ">
                Payouts
                <span onClick={handlePayoutSettings} className="bg-light pointer">
                  <FiSettings className="h5 pt-2" />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default User;
