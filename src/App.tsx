import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
  background-color: lightgray;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  & > div {
    display:inline-block;
    border: 1px dotted gray;
    padding: 10px;
  }
`;

const App = () => <Content><div>minimal-react-ts</div></Content>;

export default App;
