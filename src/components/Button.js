import styled from "@emotion/styled";

const Button = styled.button`
  background-color: grey;
  border: 1px solid blue;
  cursor: pointer;
  padding: ${props => setPadding(props.size)};
  fontsize: ${props => setFontsize(props.size)};
`;

const buttonSize = {
  XS: { padding: "5px", fontSize: "0.5em" },
  S: { padding: "7px", fontSize: "1em" },
  M: { padding: "9px", fontSize: "1.5em" },
  L: { padding: "11px", fontSize: "2em" },
  XL: { padding: "13px", fontSize: "2.5em" },
  XXL: { padding: "15px", fontSize: "3em" }
};

function setPadding(size) {
  return buttonSize[size].padding; //size: Größe wird dynamisch geholt, eckige Klammern weil man anhand einer Eigenschaft darauf zugreift
}

function setFontsize(size) {
  return buttonSize[size].fontSize;
}

export default Button;
