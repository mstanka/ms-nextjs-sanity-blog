import { useState } from "react";
import { Row, Button } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import FilteringMenu from "components/FilteringMenu";

import { useGetBlogsPages } from "actions/pagination";
import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
    date: { asc: 0 },
  });

  // loadMore: to load more data
  // isLoadingMore: is true whenever we make request to fetch data
  // isReachingEnd: is true when we loaded all data, data is empty array

  const { pages, isLoadingMore, isReachingEnd, loadMore } = useGetBlogsPages({
    blogs,
    filter,
  });

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">{pages}</Row>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={loadMore}
          disabled={isReachingEnd || isLoadingMore}
          size="lg"
          variant="outline-secondary"
        >
          {isLoadingMore
            ? "..."
            : isReachingEnd
            ? "No more blogs"
            : "More Blogs"}
        </Button>
      </div>
    </PageLayout>
  );
}

// this function is called during the build time
// provides props to your page
// creates static page
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 1 });
  return {
    props: {
      blogs,
    },
  };
}
