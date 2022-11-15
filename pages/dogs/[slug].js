import Image from "next/image";

/* eslint-disable */
export default function Henry({ data }) {
  return (
    <>
      <head>
        <title>{data.title}</title>
      </head>
      <h1>{data.content.heading}</h1>
      <p>{data.content.text}</p>
      <Image
        src={data.content.image.src}
        alt={data.content.image.alt}
        width={data.content.image.width}
        height={data.content.image.height}
        //Disables lazy load - do that if img is above the page fold priority

        priority
        sizes="(max-width: 700px) 100vw,
             700px"

        //you can also use 33vw instead of 400px (on bigger screen the picture gets smaller, on smaller screens the picture gets bigger)
      />
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/henry");
  const data = await res.json();
  // console.log(data);
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/");
  const data = await res.json();

  const paths = data.map((entry) => {
    return {
      params: { slug: entry.slug },
    };
  });
  return {
    paths: [{ params: { slug: "steve" } }, { params: { slug: "bufas" } }, { params: { slug: "henry" } }],

    fallback: false,
  };
}

// export async function getServerSideProps(context) {
//   console.log;
//   {
//     context.params.slug;
//   }
//   const res = await fetch("https://bucolic-bombolone-857476.netlify.app/api/dogs/" + context.params.slug);

//   // If no succes, return a 404 redirect
//   if (res.status != 200) {
//     return {
//       notFound: true,
//     };
//   }

//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }
