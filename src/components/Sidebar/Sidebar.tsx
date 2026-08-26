import { useState } from "react";
import * as Styled from "./Sidebar.styles.tsx";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Relatórios");
  const items = ["Relatórios", "Lançamentos", "Categorias", "Novo lançamento"];
  // const icons = [""]

  return (
    <>
      <Styled.Sidebar>
        <Styled.SidebarItemContainer>
          <Styled.Navegacao>Navegação</Styled.Navegacao>
          <Styled.SidebarLista>
            {items.map((item) => (
              <Styled.SidebarLink
                key={item}
                $active={activeItem === item}
                onClick={() => setActiveItem(item)}
              >
                {item}
              </Styled.SidebarLink>
            ))}
          </Styled.SidebarLista>
        </Styled.SidebarItemContainer>
      </Styled.Sidebar>
    </>
  );
}
