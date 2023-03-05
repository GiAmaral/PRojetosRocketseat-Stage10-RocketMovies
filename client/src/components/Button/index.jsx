import { Container } from "./styles";

export function Button({ title, Icon, className, type = "button", ...rest }) {
  return (
    <Container {...rest} type={type} className={className}>
      {Icon ? <Icon /> : null}
      {title ? <span>{title}</span> : null}
    </Container>
  );
}
