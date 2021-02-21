const NerdDetails = ({ nerd }) => {
  return (
    <div>
      <h1>{nerd.name}</h1>
      <p>{nerd.email}</p>
      <p>{nerd.website}</p>
      <p>{nerd.address.city}</p>
    </div>
  );
};

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((nerd) => {
    return {
      params: { id: nerd.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { nerd: data },
  };
};

export default NerdDetails;
