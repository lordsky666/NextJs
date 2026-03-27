import { Urbanist } from "next/font/google";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="Top">
        <Image src="/Foto/image_1.png"         
        alt="Imaginea federatiei"
        width={100} 
        height={100}
        />

        {/* <div className="Top-menu">
          <a href="#home">Pagina principala</a>
          <a href="#home">Campioante</a>
          <a href="#home"></a>
        </div> */}
      </div>

      {/* <div>
        <button>"Im button"</button>
      </div> */}

      <div className="Describe">
        <p>Write your own project</p>
      </div>



    </div>

  );
}