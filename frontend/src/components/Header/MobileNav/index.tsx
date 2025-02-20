"use client";

import Link from "next/link";
import styles from "./index.module.scss";
import { useState } from "react";
import Image from "next/image";
import img from "../../../../public/logo.png";

export default function MobileNav() {
  const [showDropdown, setDropdown] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  const toggleDropdown = (linkName: string) => {
    setDropdown(linkName);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div>
          <Image src={img} alt="logo" className={styles.logo} />
        </div>
        {!open ? (
          <div className={styles.burger} onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        ) : (
          <div className={styles.burger} onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}

        {open && (
          <ul className={styles.navList}>
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link
                href="/services"
                onMouseEnter={() => toggleDropdown("services")}
                onMouseLeave={() => setDropdown(null)}
                className="flex items-center"
              >
                Services
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="ml-2 size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/location">Location</Link>
            </li>
          </ul>
        )}
      </nav>
      {open && showDropdown === "services" && (
        <div className={styles.dropdown}>
          <div className={styles.listWrapper}>
            <ul className={styles.mainServices}>
              <span className="text-[12px]">Main services</span>
              <li>
                <Link href="/service/one">DataOps</Link>
              </li>
              <li>
                <Link href="/service/one">Master Data Managment</Link>
              </li>
              <li>
                <Link href="/service/one">
                  Cloud Architecture and Migration
                </Link>
              </li>
              <li>
                <Link href="/service/one">Smart Analytics</Link>
              </li>
            </ul>
            <ul className={styles.additionalServices}>
              <span className="text-[12px]">Additional services</span>
              <li>
                <Link href="/service/one">Custom Software Development</Link>
              </li>
              <li>
                <Link href="/service/one">Web Application Development</Link>
              </li>
              <li>
                <Link href="/service/one">API Integration</Link>
              </li>
              <li>
                <Link href="/service/one">IT Support and Maintenance</Link>
              </li>
              <li>
                <Link href="/service/one">Cloud Hosting Services</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
