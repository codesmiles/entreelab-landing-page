import { useRouter } from "next/router";
import LoginUser from "../../components/user/login";
import RegisterUser from "../../components/user/register";
export default function User() {
  const router = useRouter();
  const { params = [] } = router.query;


  if (params.length === 1) {
    if (params[0].toLowerCase() === `register`) {
      return <RegisterUser />;
    } else if (params[0].toLowerCase() === `login`) {
      
      return <LoginUser/>
    }
  } else {
    return null;
  }

  // return (
  //     <>
  //         <h1>user {id}</h1>
  //     </>
  // )
}
