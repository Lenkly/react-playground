import React from "react";
import styled from "@emotion/styled";
import "./PasswordInput.css";

function Huecolor(props) {
  return Math.min(props.value.length * 10, 100);
}

const Input = styled.Input`
  border: 5px solid slateblue;
  font-size: 1.5rem;
  background-color: [ ${Huecolor}, 50%, 50%];
`;

function PasswordInput({ value }) {
  //const [password, setPassword] =
  return <Input type="password" value={value} />;
}

export default PasswordInput;

//   if (value.length === 0) {
//     return <input type="password" class="empty" value={value} />;
//   } else if (value.length === 1) {
//     return <input type="password" class="superunsafe" value={value} />;
//   } else if (value.length === 2) {
//     return <input type="password" class="notsosafe" value={value} />;
//   } else if (value.length === 3) {
//     return <input type="password" class="notsafe" value={value} />;
//   } else if (value.length === 4) {
//     return <input type="password" class="halfsafe" value={value} />;
//   } else if (value.length === 5) {
//     return <input type="password" class="almostsafe" value={value} />;
//   } else if (value.length === 6) {
//     return <input type="password" class="safe" value={value} />;
//   } else if (value.length === 7) {
//     return <input type="password" class="safer" value={value} />;
//   } else if (value.length === 8) {
//     return <input type="password" class="supersafe" value={value} />;
//   } else if (value.length === 9) {
//     return <input type="password" class="megasafe" value={value} />;
//   } else if (value.length >= 10) {
//     return <input type="password" class="ultrasafe" value={value} />;
//   }
