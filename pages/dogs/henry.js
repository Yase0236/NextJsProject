import Image from "next/image";

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
      />
    </>
  );
}

export default Henry;
