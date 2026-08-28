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

export const SidebarHeader = styled.div`
  width: 100%;
  padding: 8px;
  display: flex;
  align-items: center
  gap: 5px;
`;

export const SidebarLogo = styled.div`
  background-color: var(--foreground);
  border-radius: var(--radius)
  padding: 
`

export const SidebarItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  position: relative;
`;

export const SidebarList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SidebarLink = styled.a<{ $active: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--sidebar-accent)" : "var(--sidebar)"};
  color: var(--sidebar-foreground);
  border: none;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875em;
  font-weight: ${({ $active }) =>
    $active ? "var(--font-weight-medium)" : "var(--font-weight-semi-bold)"};
  line-height: 1.15;
  padding: 8px;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover,
  :focus {
    background-color: var(--sidebar-accent);
    border: none;
  }
`;

export const Nav = styled.div`
  color: color-mix(in oklab, var(--sidebar-foreground) 70%, transparent);
  font-weight: var(--font-weight-medium);
  font-size: var(--text-xs);
  padding: 0px 8px;
`;
