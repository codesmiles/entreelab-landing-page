import Image from "next/image";
import Link from "next/link";
const ImgLogo = () => {
    return ( 
        <Link href="/">
            <a>
            <Image src={`/user/logo.svg`} width={`61.63`} height={`50`} alt=""/> 
            </a>
        </Link>
     );
}
 
export default ImgLogo;