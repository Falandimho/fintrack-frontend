import styled from "styled-components";

export const Sidebar = styled.div`
  background-color: var(--sidebar);
  width: 16rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 8px;
`;

export const SidebarItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  position: relative;
`;

export const SidebarItem = styled.a<{ $active: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--sidebar-accent)" : "var(--sidebar)"};
  color: var(--sidebar-foreground);
  border: none ;
  font-size: 0.875em;
  font-weight: 400;
  padding: 8px;
  text-align: left;
  line-height: calc(1.25 - .875);

  &:hover,
  :focus {
    background-color: var(--sidebar-accent);
    border: none;
  }
`;
