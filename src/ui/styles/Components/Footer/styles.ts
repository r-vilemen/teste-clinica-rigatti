import styled from "styled-components";

export const FooterWrapper = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.quaternary};
  background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
  border-top: 1px solid ${({ theme }) => theme.colors.border.colors.quaternary};
  margin-top: 4rem;
`;

export const Strong = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
`;
