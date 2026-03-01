import Image from "next/image";
export default function Home() {
  return (
 
      
<div className="image-container">
<div>
   <Image
      src="/BeClub.png"
      width={300}
      height={300}
      alt="Picture of the author"
    />
    </div>
   <p className='about-beclub'>
  Be-Club, founded at Berea College in Kentucky,
       is a thriving community of students passionate about entrepreneurship who through talks,
      workshops, and conferences, challenge the idea that entrepreneurship isn't just about businesses but a mentality that anyone can acquire!
    
     </p>
     <div>

     </div>
    <div>
      
 <Image
      src="/grow.JPG"
      width={500}
      height={50}
      alt=""
    />
 <Image
    className='learn'
    src="/learn.jpg"
    width={500}
    height={200}
    alt="An organization dedicated to helping young entrepreneurs"
  />
</div>

<div>
    <Image
      src="/collab.JPG"
      width={500}
      height={300}
      alt=""
    />
  

    <Image
      src="/IMG_2382.JPG"
      width={500}
      height={300}
      alt=""
    />
    </div>
    {/* <div>
<h1>Student Driven!</h1>
</div> */}
<div>
    <Image
      src="/IMG_6799.JPG"
      width={500}
      height={500}
      alt=""
    />

    <Image
      src="/IMG_6360.jpg"
      width={500}
      height={500}
      alt=""
    />
    </div>
    <div>
</div>
</div>

  );
}
