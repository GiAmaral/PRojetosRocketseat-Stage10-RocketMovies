import { Container } from "./styles";

import { Link } from "react-router-dom";

export function MoviesDetails({ title, id, children }) {
  return (
    <Container>
      <Link to={`/preview/${id}`}>
        <h1>{title}</h1>
      </Link>
      {children}
    </Container>
  );
}
