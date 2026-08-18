import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: var(--sidebar);
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  gap: 10px;
`;

export const SidebarItem = styled.button<{ $active: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--sidebar-accent)" : "var(--sidebar)"};
  color: var(--sidebar-foreground);
  border: none;
  font-size: 1em;
  width: 100%;
  padding: 10px 20px;

  &:hover,
  :focus {
    background-color: var(--sidebar-accent);
    border: none;
  }
`;
