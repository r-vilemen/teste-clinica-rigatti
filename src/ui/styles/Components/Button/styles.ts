import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.backgrounds.quaternary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  font-size: ${({ theme }) => theme.sizes.font.primary};
  transition: background-color 0.3s ease;
  font-weight: 500;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.sextenary};
  }

  &:disabled {
    opacity: 0.6;
  }
`;
