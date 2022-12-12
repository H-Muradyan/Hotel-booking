import React, { useState } from "react";
import Contacts from "./Contact";
import FinalPart from "./FinalPart";
import FooterLogo from "./FooterLogo";
import Pages from "./Pages";
import { footerData } from "./const"; 
import SocialPages from "./SocialPages";

const Footer = () => {
  const [footerData1, setFooterdata] = useState(footerData)

  return (
    <footer className="bg-headerbg">
      <div className="md:grid grid-cols-4 pt-16 px-3 md:px-10 gap-x-8 md:grid-cols-8 lg:grid-cols-12 max-w-screen-2xl m-auto">
        <FooterLogo />
        <Pages pages={footerData1.pages} />
        <Contacts contacts={footerData1.contacts} />
        <SocialPages socialPages={footerData1.socialPages} />
      </div>
      <FinalPart />
    </footer>
  );
};

export default Footer;
