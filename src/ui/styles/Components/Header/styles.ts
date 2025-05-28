import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.backgrounds.quaternary};
  padding: 1.5rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
`;

export const LogoutButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.border.colors.terciary};
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgrounds.quaternary};
    text-decoration: underline;
    /* color: ${({ theme }) => theme.colors.text.quinary}; */
    border-color: transparent;
  }
`;
