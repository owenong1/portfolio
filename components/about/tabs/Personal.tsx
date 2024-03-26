import Image from "next/image";
import ramen from "./ramen.png";

const personalTab = (
    <div className="inline w-full justify-between gap-5 sm:flex">
      <div className="mb-5 text-left sm:mb-0">
        <h5>Personal:</h5>
        <p>
          I love ramen.
          <br />
          <br />

          <br />
          <br />

        </p>
      </div>
      <div className="mx-auto w-fit flex-shrink-0 overflow-hidden rounded-lg sm:my-auto sm:inline">
        <Image
          src={ramen}
          className="w-60 transition duration-500 ease-in-out hover:scale-105"
          alt="Friend holding a bundle of lights"
          loading="eager"
        />
      </div>
    </div>
  );
  
  export default personalTab;