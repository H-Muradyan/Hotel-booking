import email from "/images/email.svg";
import phone from "/images/phone.svg";
import location from "/images/location.svg";
import fb from "/images/fb.svg";
import insta from "/images/insta.svg";
import linkedin from "/images/linkedin.svg";
export const footerData = {
  pages: [
    {
        id: 0,
        text: "Home",
        path: "/",
      },
      {
        id: 1,
        text: "Dashboard",
        path: "/dashboard/bookings",
      },
      {
        id: 2,
        text: "Log in",
        path: "/login",
      },
      {
        id: 3,
        text: "Register",
        path: "/register",
      },
  ],
  contacts: [
    {
      id: 0,
      text: "Book@Hotel.co",
      link: "",
      image: email,
    },
    {
      id: 1,
      text: "1-634-567-34",
      link: "",
      image: phone,
    },
    {
      id: 2,
      text: "Hotale Av.del Ejercito, 2, 1900 Madrid, Spain",
      link: "",
      image: location,
    },
  ],
  socialPages: [
    {
      id: 0,
      link: "",
      image: fb,
    },
    {
      id: 1,
      link: "",
      image: insta,
    },
    {
      id: 2,
      link: "",
      image: linkedin,
    },
  ],
};