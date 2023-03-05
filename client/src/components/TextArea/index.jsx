import { Container } from "./styles";

export function TextArea({ icon: Icon, className, ...rest }) {
  return (
    <Container className={className}>
      {Icon && <Icon size={20} />}
      <textarea {...rest} />
    </Container>
  );
}
