import styled from "@emotion/styled";
import { Box } from "@mui/material";

export const Component = styled(Box)`
  position: relative;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.5) 0px 2px 8px 0px;
  max-width: 200px;
  height: 250px;
  border-radius: 0.625rem;
  margin: 0 auto;
  transition: all 0.2s ease-out;

  &:hover {
    cursor: pointer;
    transform: translateY(-5px);
  }

  &.disabled {
    cursor: not-allowed;

    &:hover {
      transform: translateY(0);
    }
  }

  &.open-editor {
    &:hover {
      cursor: initial;
      transform: translateY(0px);
    }
  }

  &.scale-up {
    transform: scale(1.5);
    cursor: initial;

    &.open-editor {
      &:hover {
        transform: scale(1.5);
      }
    }
  }

  .edit-button {
    transition: all 0.2s ease-out;

    &:hover {
      transform: translateY(-2px);
    }
  }
`