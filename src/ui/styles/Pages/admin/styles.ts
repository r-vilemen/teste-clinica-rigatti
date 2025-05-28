import styled from "styled-components";

export const AdminWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ScheduleItem = styled.li`
  background: ${({ theme }) => theme.colors.backgrounds.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border.colors.terciary};
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
  padding: 1rem;
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const Status = styled.span<{ status: string }>`
  font-weight: 600;
  text-transform: capitalize;
  color: ${({ status, theme }) =>
    status === "aprovado"
      ? theme.colors.text.secondary
      : status === "reprovado"
      ? "crimson"
      : theme.colors.text.quaternary};
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;
