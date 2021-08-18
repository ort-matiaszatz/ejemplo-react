import React, {useState} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Mensaje = (props) => {

  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  }

  return (
    <StyledMensaje>
      <div className={`caja caja-${props.size}`}>{props.children}</div>
      <div>Contador: {contador}</div>
      <button
        onClick={handleClick}
      >
      Aumentar
      </button>
    </StyledMensaje>
  );
};

const StyledMensaje = styled.div`
.caja{
  background-color: aquamarine;
  height: 200px;
}

.caja-chica{
  width: 25%;
}

.caja-grande{
  width: 100%;
}
`;

Mensaje.propTypes = {
  texto: PropTypes.string.isRequired
};

export default Mensaje;
