import { v4 as uuid } from "uuid";
import { Container } from "./styles";
import { ReactComponent as EmptyStar } from "../../assets/img/star.svg";
import { ReactComponent as FilledStar } from "../../assets/img/filledStar.svg";

export function Score({ score = 0 }) {
  const emptyStarCount = 5 - Math.floor(score);

  return (
    <Container>
      {Array.from({ length: score }).map(() => {
        return <FilledStar key={uuid()} />;
      })}

      {Array.from({ length: emptyStarCount }).map(() => {
        return <EmptyStar key={uuid()} />;
      })}
    </Container>
  );
}
