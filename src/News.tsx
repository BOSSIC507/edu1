import { Link, useParams } from "react-router";

interface NewPageProps {
  params: {
    id: string;
  };
}

const NewPage = () => {
  const { id, username, phone } = useParams();

  return (
    <main>
      <div>new</div>
      <span>{id}</span>
      <span>{username}</span>
      <span>{phone}</span>

      <Link to={"/"}>click</Link>
    </main>
  );
};

export default NewPage;
