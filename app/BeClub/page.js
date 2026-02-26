import Image from "next/image";
import useSWR from 'swr';

export default function Page() {
    return (
        <div className = 'BeClub'>
    <Image
      src="/4.png"
      width={500}
      height={100}
      alt=""
    /></div>
    );
}