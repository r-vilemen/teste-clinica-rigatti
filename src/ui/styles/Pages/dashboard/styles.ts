import styled from "styled-components";

export const DashboardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Greeting = styled.h2`
  font-size: ${({ theme }) => theme.sizes.font.terciary};
  color: ${({ theme }) => theme.colors.text.tertiary};
`;

export const SectionTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.font.secundary};
  color: ${({ theme }) => theme.colors.text.secondary};
`;

export const ScheduleList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ScheduleItem = styled.li`
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.backgrounds.tertiary};
  border: 1px solid ${({ theme }) => theme.colors.border.colors.terciary};
  border-radius: ${({ theme }) => theme.sizes.border.radius.primary};
`;

export const Label = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.tertiary};
`;
