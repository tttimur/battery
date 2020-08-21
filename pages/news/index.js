import Newspage from "components/news";
import { makeGenericRequest } from "api/wp";

const Page = (props) => <Newspage {...props} />;

export async function getServerSideProps() {
  const page = await makeGenericRequest(`news`);

  return {
    props: {
      page,
    },
  };
}

export default Page;
