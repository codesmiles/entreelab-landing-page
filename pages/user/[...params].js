import {useRouter}from "next/router"

export default function UserBoilerPlate() {
    const router = useRouter()
    const {params=[]} = router.query
    
    if(params.length === 1){
        if(params[0].toLowerCase() === `login`){
          return (
            <>
                <h1>Login</h1>
            </>
          )
        }
    }
    

    // return (
    //     <>
    //         <h1>user {id}</h1>
    //     </>
    // )
}