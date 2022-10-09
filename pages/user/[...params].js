import {useRouter}from "next/router"

// import Head from "next/head";
// import Link from "next/link";
// import Image from "next/image";
// import Btn from "../../components/utils/btn";

export default function UserBoilerPlate() {
    const router = useRouter()
    const {params=[]} = router.query
    
    if(params.length === 1){
        if(params[0].toLowerCase() === `register`){
          return (
            <></>
          )
        }else if(params[0].toLowerCase() === `login`){
            return (
                <></>
            )
        }
    }else{
        return null;
    }
    

    // return (
    //     <>
    //         <h1>user {id}</h1>
    //     </>
    // )
}