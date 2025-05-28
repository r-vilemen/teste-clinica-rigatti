import styled from "styled-components";

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.backgrounds.quaternary};
  padding: 1.5rem;
  text-align: center;
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.text.quinary};
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  font-weight: 600;
  font-family: ${({ theme }) => theme.fonts.primary};
`;
