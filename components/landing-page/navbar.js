import Image from "next/image";
import logo from '../../public/landing-page/mobile-logo.svg'
import {MdKeyboardArrowDown} from 'react-icons/md'
const NavBar = () => {
  return (
    <nav className={`flex justify-between py-10 w-11/12 mx-auto items-center lg:mb-20`}>
    
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
            <Image src={`/landing-page/desktop-logo.svg`} width={`149.14px`} height={`31.89px`} />
          </a>
        </div>
      </div>
      <div className="">
        <p className={`text-[#2979A0] lg:hidden`}>Login on Desktop</p>
        <div className={`hidden lg:block `}>
          <ul>
            <lh className="text-white">
              <a href={`#`} className="flex items-center">
              Login 
              <MdKeyboardArrowDown className="text-xl"/>
              </a>
            </lh>
            <div className="lg:hidden">
              <li>login for lms</li>
              <li>login for accounting</li>
              <li>login for hrms</li>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
