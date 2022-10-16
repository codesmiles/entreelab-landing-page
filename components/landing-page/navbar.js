import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import logo from "../../public/landing-page/mobile-logo.png";
import logo1 from "../../public/landing-page/desktop-logo.png"
import { useState } from "react";


const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const listItemData =[
    {
      text:`Login for LMS`,
      link:`#`
    },
    {
      text:`Login for Accounting Software`,
      link:`#`
    },
    {
      text:`Login for HRMS`,
      link:`#`
    }
  ];
  return (
    <nav
      className={`flex justify-between py-10 w-11/12 mx-auto items-center lg:mb-20`}
    >
      <div>
        <div className="lg:hidden">
          <a href="#">
            <Image
              src={logo}
              alt={`Entreelab Logo`}
              width={`70px`}
              height={`48.62px`}
              blurDataURL={logo}
              placeholder="blur"
            />
          </a>
        </div>
        <div className="hidden lg:block">
          <a href="#">
            <Image
              src={logo1}
              placeholder="blur"
              width={`149.14px`}
              height={`31.89px`}
            />
          </a>
        </div>
      </div>
      <div className="">
        <p className={`text-[#2979A0] lg:hidden`}>Login on Desktop</p>
        <div className={`hidden lg:block `}>
          <ul>
            <lh className="text-white" onClick={showMenuHandler}>
              <a href={`#`} className="flex items-center text-xl">
                Login
                <MdKeyboardArrowDown />
              </a>
            </lh>
            <div
              className="absolute z-30 bg-white w-44 h-32 right-14 pl-3 pt-3"
              style={{ display: showMenu ? "block" : "none" }}
            >
              {listItemData.map((item, index) => {
                return (
              <li key={index} className={`pb-1`}>
                <a href={item.link}>{item.text}</a>
              </li>
                )

              })}
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
