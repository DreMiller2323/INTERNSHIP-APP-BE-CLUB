import Image from "next/image";
export default function Home() {
  return (
 <main>

  <div className="grid-container">
  <div> 
  Bodybuilder/Personal Fitness Trainer
    <Image
      src="/DreFit.jpg"
      width={250}
      height={500}
      alt="Picture of the author"
    /></div>
    <div> 
    App Developer
    <Image
      src="/code.jpg"
      width={250}
      height={500}
      alt="Picture of the author"
    /></div>
        <div> 
    App Developer
    <Image
      src="/code.jpg"
      width={250}
      height={500}
      alt="Picture of the author"
    /></div>
     <div>App Developer</div>
</div>

</main>
  );
}
