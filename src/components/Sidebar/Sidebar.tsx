import { useState } from "react";
import * as Styled from "./Sidebar.styles.tsx";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Relatórios");
  const items = ["Relatórios", "Lançamentos", "Categorias", "Novo lançamento"];

  return (
    <Styled.Sidebar>
      {items.map((item) => (
        <Styled.SidebarItem
          key={item}
          $active={activeItem === item}
          onClick={() => setActiveItem(item)}
        >
          {item}
        </Styled.SidebarItem>
      ))}
    </Styled.Sidebar>
  );
}