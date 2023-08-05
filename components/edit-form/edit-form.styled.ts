import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Component = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  top: 0;
  left: 0;
  border-radius: 10px;
  z-index: 50;
  padding: 0.5rem;

  input {
    border: solid 1px #e3e3e3;
    width: 100%;
  }

  form {
    margin-top: 0.5rem;
  }
`