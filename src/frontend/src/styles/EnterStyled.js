import React from 'react';
import styled from 'styled-components';

export const EnterHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`
export const EnterButton = styled.button`
  background-color: #00a568
  height: 60px;
  width: 95%;
  margin: 2.5%;
  text-decoration: none;
  color: black;
  font-size: 26px;
  font-family: "myraid pro", sans-serif;
  cursor: pointer;
`

export const EnterFormHolder = styled.form`
  width: 100%;
  max-width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const EnterInput = styled.input`
  width: 95%;
  margin: 2.5%;
  background-color: #eaeaea;
  border: 2px solid black;
  max-width: 400px;
  height: 55px;
  font-size: 26px;
  padding-left: 10px;
`

export const EnterLabel = styled.label`
  font-size: 16px;
  font-family: 'Myraid Pro', sans-serif;
  margin: 0;
  align-self: flex-start;
  margin-left: 2.5%;
  font-weight: 100;
`
