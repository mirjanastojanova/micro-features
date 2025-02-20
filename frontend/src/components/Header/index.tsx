"use client";

import styles from "./index.module.scss";
import { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Header() {
  const [showDropdown, setDropdown] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // Check on load
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleDropdown = (linkName: string) => {
    setDropdown(linkName);
  };

  return (
    <header className={styles.header}>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </header>
  );
}
