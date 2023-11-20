import MenuDnd from "@/components/menu-dnd";
import { useStyle } from "./style";

export default function TopMenu() {
  const { styles } = useStyle()
  return (
    <div className="top-menu-wrapper">
      <div className={styles.topMenu + ' hide-scrollbar'}>
        <MenuDnd />
      </div>
    </div>
  );
}
