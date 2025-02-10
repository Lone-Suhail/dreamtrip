import Link from "next/link";
import { homeItems } from "../../data/mainMenuData"; // Removed pageItems
import CategoriesMegaMenu from "./CategoriesMegaMenu";
import { isActiveParentChaild, isActiveLink } from "../../utils/linkActiveChecker";
import { usePathname } from "next/navigation";
import { useState } from "react";

const MainMenu = ({ style = "" }) => {
  const pathname = usePathname();
  const [isActiveParent, setIsActiveParent] = useState(false);

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={`${isActiveParentChaild(homeItems, pathname) ? "current" : ""} menu-item-has-children`}>
          <a href="#">
            <span className="mr-10">Home</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <ul className="subnav">
            {homeItems.map((menu, i) => (
              <li key={i} className={isActiveLink(menu.routePath, pathname) ? "current" : ""}>
                <Link href={menu.routePath}>{menu.name}</Link>
              </li>
            ))}
          </ul>
        </li>
        {/* End home page menu */}

        <li className={isActiveParent ? "menu-item-has-children -has-mega-menu current" : "menu-item-has-children -has-mega-menu"}>
          <a href="#">
            <span className="mr-10">Categories</span>
            <i className="icon icon-chevron-sm-down" />
          </a>
          <div className="mega">
            <CategoriesMegaMenu setIsActiveParent={setIsActiveParent} />
          </div>
        </li>
        {/* End categories menu */}

        <li className={pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li>
        {/* End destinations menu */}

        <li className={pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
