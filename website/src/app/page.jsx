import { Video } from "@/components/video";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      {/*header*/}
      <div className="shadow-2xl">
        <div className="m-auto max-w-7xl flex justify-center items-center p-3">
          <div>
            <a href="">
              <img
                src="/CURSOS-TECNICOS-APOGEU.webp"
                alt="logo"
                className="w-44 max-sm:w-40"
              />
            </a>
          </div>
          
        </div>
      </div>
      {/*main*/}
      <div className="bg-[#72a83b] pt-12 px-4 bg-wave bg-no-repeat bg-bottom bg-cover max-sm:pt-8 max-sm:pb-4">
        <div className="m-auto max-w-7xl flex justify-center items-center flex-col">
          <h1 className="text-white font-semibold text-3xl text-center max-sm:text-2xl/7 ">
            TUTORIAL PLATAFORMA EAD 
          </h1>
    
          <IoPhonePortraitOutline className="text-white text-5xl my-5 animate-wiggle animate-infinite animate-alternate" />

          <div className="max-md:w-full">
            <Video />
          </div>

          
        </div>
      </div>
    </div>
  );
}
