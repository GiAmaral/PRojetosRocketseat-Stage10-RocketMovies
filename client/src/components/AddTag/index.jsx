import { FiPlus, FiX } from "react-icons/fi";

import { Container } from "./styles";

export function AddTag({ isNew = false, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      {isNew ? (
        <input type="text" value={value} {...rest} />
      ) : (
        <span>{value}</span>
      )}

      <button type="button" onClick={onClick}>
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
