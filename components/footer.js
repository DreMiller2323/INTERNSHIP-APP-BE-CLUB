import Image from "next/image";

export  function Footer() {
    return (
        <div className='footer'>

     <Image
      src="/DreFit.jpg"
      width={25}
      height={25}
      alt="Picture of the author"
    />
    </div>

    );
}