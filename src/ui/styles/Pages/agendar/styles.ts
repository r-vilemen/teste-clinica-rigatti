import styled from "styled-components";

export const AgendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  border: 1px solid ${({ theme }) => theme.colors.border.colors.terciary};
  font-size: ${({ theme }) => theme.sizes.font.primary};
`;
