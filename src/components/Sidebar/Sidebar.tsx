import { useState } from "react";
import * as Styled from "./Sidebar.styles.tsx";
import {
  ChartColumn,
  ListChecks,
  Tags,
  CirclePlus,
  PiggyBank,
} from "lucide-react";

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("Relatórios");
  const items = [
    {
      label: "Relatórios",
      icon: ChartColumn,
      path: "/",
    },
    {
      label: "Lançamentos",
      icon: ListChecks,
      path: "/lancamentos",
    },
    {
      label: "Categorias",
      icon: Tags,
      path: "/categorias",
    },
    {
      label: "Novo Lançamentos",
      icon: CirclePlus,
      path: "/novo-lancamento",
    },
  ];

  return (
    <>
      <Styled.Sidebar>
        <Styled.SidebarHeader>
          <PiggyBank />
          <p>Fintrack</p>
        </Styled.SidebarHeader>

        <Styled.SidebarItemContainer>
          <Styled.Nav>Navegação</Styled.Nav>
          <Styled.SidebarList>
            {items.map((item) => {
              const Icon = item.icon;

              return (
                <li>
                  <Styled.SidebarLink
                    key={item.path}
                    $active={activeItem === item.label}
                    onClick={() => setActiveItem(item.label)}
                  >
                    <Icon size={16} />
                    {item.label}
                  </Styled.SidebarLink>
                </li>
              );
            })}
          </Styled.SidebarList>
        </Styled.SidebarItemContainer>
      </Styled.Sidebar>
    </>
  );
}
