import styled from "styled-components";

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 4rem;
`;

export const LoginBox = styled.div`
  background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
  padding: 3rem;
  border-radius: ${({ theme }) => theme.sizes.border.radius.teriary};
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const LoginInput = styled.input`
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.colors.terciary};
  font-size: ${({ theme }) => theme.sizes.font.primary};
`;

export const LoginTitle = styled.h2`
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
