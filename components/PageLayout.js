import { Container } from "react-bootstrap";
import BlogNavbar from "./BlogNavbar";

export default function PageLayout({ children }) {
  return (
    <Container>
      <BlogNavbar />
      <div >{children}</div>

      <footer className="page-footer">
        <div>
          <a href="#">courses</a>
          {" | "}
          <a href="#">github</a>
          {" | "}
          <a href="#">facebook</a>
        </div>
      </footer>
    </Container>
  );
}
