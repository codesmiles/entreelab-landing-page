import { MainHeader } from "./sub-components/header";
import { RequestDemo } from "./sub-components/btn";
const WhatWeOffer = () => {
    return ( <section className={"text-[#0F2D3C] text-center md:w-3/4 md:mx-auto my-10 md:my-20"}>
    <div className="mb-3">
        <MainHeader text={"what we offer"}/>
    </div>
        <p>
          Our solutions are built to enhance the business operation of our
          clients by developing and/or implementing premium IT products and
          services. You could request a demo for any of our products.
        </p>
        <div className="mt-5">
        <a href="#">
            <RequestDemo text={`request demo`}></RequestDemo>
        </a>
        </div>

      </section> );
}
 
export default WhatWeOffer;