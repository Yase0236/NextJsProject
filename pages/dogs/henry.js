import Image from "next/image";

//export default function Henry(){indhold} - another way to use it instead of rcfe
function Henry() {
  return (
    <>
      <h1>Hi I am Henry</h1>
      <Image
        src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e"
        alt="Cute dog"
        width="4240"
        height="2832"
        //Disables lazy load - do that if img is above the page fold priority

        priority
        sizes="(max-width: 768px) 100vw,
             (max-width: 1200px) 50vw,
             400px"

        //you can also use 33vw instead of 400px (on bigger screen the picture gets smaller, on smaller screens the picture gets bigger)
      />
    </>
  );
}

export default Henry;
