import { Container } from "./styles";

export function Link({ title, Icon, className, ...rest }) {
  return (
    <Container {...rest} className={className}>
      {Icon ? <Icon /> : null}
      {title ? <span>{title}</span> : null}
    </Container>
  );
}
