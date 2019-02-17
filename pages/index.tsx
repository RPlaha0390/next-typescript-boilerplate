import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #000;
  color: #fff;
`

export default class extends React.Component {
  render() {    
    return (
      <Wrapper>
        Hello Next.js
      </Wrapper>
    )
  }
}