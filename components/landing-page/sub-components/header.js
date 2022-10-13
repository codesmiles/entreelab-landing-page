
const FooterHeader = ({text,fontSize="24px"}) => {
    return (  <h1 className={`capitalize my-2 font-bold text-[${fontSize}]`}>{text}</h1> );
}

const MainHeader =({text})=>{
    return <h1 className={`capitalize font-bold lg:mb-4 text-xl md:text-2xl`}>{text}</h1>
}
 
export {FooterHeader, MainHeader};