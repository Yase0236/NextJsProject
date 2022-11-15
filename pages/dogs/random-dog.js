export default function RndDog({ data }) {
  // eslint-disable-next-line
  return <img src={data.message} alt="A random dog" />;
}

//this function runs on the server
export async function getServerSideProps() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();

  console.log(data);

  return {
    props: {
      data,
    },
  };
}
