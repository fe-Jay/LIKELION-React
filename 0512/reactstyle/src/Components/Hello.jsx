import React from 'react'
import styled from "styled-components";

const HelloH2 = styled.h2`
  width: 200px;
  margin: 0 auto;
  text-align: center;
  color:blue;
`;

export default function Hello() {
    return (
        <HelloH2>
            Hello
        </HelloH2>
    )
}
