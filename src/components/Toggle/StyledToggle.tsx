import styled from "styled-components";

export const Handle = styled.div`
  background-color: ${({ theme }) => theme.toggle.handleBackground};
  border: 2px solid #fff1;
  border-radius: 50%;
  cursor: pointer;
  height: 32px;
  left: 2px;
  position: absolute;
  top: 2px;
  transition: left 200ms ease-in;
  width: 32px;
  z-index: 1;
  box-shadow: 0px 0px 0px 1px #f0b90b, 0px 0px 0px 2px #f8d33a88;
`;

export const Input = styled.input`
  cursor: pointer;
  opacity: 0;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;

  &:checked + ${Handle} {
    left: calc(100% - 34px);
  }

  &:focus + ${Handle} {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }

  &:hover + ${Handle}:not(:disabled):not(:checked) {
    box-shadow: ${({ theme }) => theme.shadows.focus};
  }
`;

const StyledToggle = styled.div<{ checked: boolean }>`
  align-items: center;
  background-color: ${({ theme, checked }) => theme.colors[checked ? "primaryBright" : "input"]};
  border-radius: 24px;
  box-shadow: ${({ theme }) => theme.shadows.inset};
  cursor: pointer;
  display: inline-flex;
  height: 36px;
  position: relative;
  transition: background-color 200ms;
  width: 60px;
`;

export default StyledToggle;
