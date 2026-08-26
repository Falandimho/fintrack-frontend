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
  box-sizing: border-box;
`;

export const SidebarItemContainer = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  position: relative;
  box-sizing: border-box;
`;

// export const SidebarIcon = styled.svg<{ $}`

// `;

export const SidebarLista = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SidebarItem = styled.li`
  padding: 8px;
`;

export const SidebarLink = styled.a<{ $active: boolean }>`
  background-color: ${({ $active }) =>
    $active ? "var(--sidebar-accent)" : "var(--sidebar)"};
  color: var(--sidebar-foreground);
  border: none;
  border-radius: calc(var(--radius) - 2px);
  font-size: 0.875em;
  font-weight: 400;
  padding: 8px;
  text-align: left;

  &:hover,
  :focus {
    background-color: var(--sidebar-accent);
    border: none;
  }
`;

export const Navegacao = styled.div`
  color: color-mix(in oklab, var(--sidebar-foreground) 70%, transparent);
  font-weight: medium;
  font-size: var(--text-xs);
  padding: 0px 8px;
`;
