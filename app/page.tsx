import Image from "next/image";
export default function Home() {
  return (
<div className="grid">
   <div className="col-1-3  image-container">
    
   </div>
    <div className = 'col-2-3  image-container'>
   <Image
      src="/BeClub.png"
      width={500}
      height={100}
      alt="Picture of the author"
    />
     <div className='frontend-content'>Learn Entrepreneurship!</div>

</div>

    <div className = 'col-1-3  image-container'>
    <Image
      src="/learn.jpg"
      width={500}
      height={100}
      alt="An organization dedidacted to helping young entrepreneaurs"
    />
    <div className="bottom-left">Education!</div>
</div>

  

<div className="col-2-3 image-container">

  <Image
    src="/Collab.jpg"
    width={500}
    height={100}
    alt="An organization dedicated to helping young entrepreneurs"
  />
  <div className="bottom-left">Build Connections</div>
</div>

    <div className = "col-1-3 image-container">
  <div>Win!</div>

    <Image
      src="/IMG_6799.jpg"
      width={500}
      height={500}
      alt="An organization dedidacted to helping young entrepreneaurs"
    />
  <div className="bottom-left">Win together!</div>
</div>
</div>

  );
}
