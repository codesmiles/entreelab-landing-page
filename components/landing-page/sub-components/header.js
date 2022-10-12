
const Header = ({text,fontSize="24px"}) => {
    return (  <h1 className={`capitalize my-2 font-bold text-[${fontSize}]`}>{text}</h1> );
}
 
export default Header;