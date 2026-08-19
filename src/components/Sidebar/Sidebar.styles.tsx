import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: var(--sidebar);
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const SidebarItemContainer = styled.div`
  
`;

export const SidebarItem = styled.a<{ $active: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--sidebar-accent)" : "var(--sidebar)"};
  color: var(--sidebar-foreground);
  border: none;
  font-size: 0.875em;
  font-weight: 500;
  width: calc(100% - 40px);
  padding: 0 8px;
  text-align: left;
  line-height: calc(1.25 - .875)

  &:hover,
  :focus {
    background-color: var(--sidebar-accent);
    border: none;
  }
`;
