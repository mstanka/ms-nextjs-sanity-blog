import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardItem from "components/CardItem";
import CardListItem from "components/CardListItem";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  return (
    <PageLayout>
      <AuthorIntro />
      <hr />

      <Row className="mb-5">
        {blogs.map((blog) => (
          <Col key="blog.slug" md="4">
            <CardItem 
            author={blog.author}
            title={blog.title} 
            subtitle={blog.subtitle}
            date={blog.date}
            image={blog.coverImage} />
          </Col>
        ))}
      </Row>
    </PageLayout>
  );
}

// this function is called during the build time
// provides props to your page
// creates static page
export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
