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
              <button
                onClick={() => toggleDropdown("services")}
                className="flex items-center gap-1 transition-all duration-300"
              >
                Services
                <span className="transform transition-transform duration-300 group-hover:rotate-90">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5 mt-1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
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
          <div className={styles.back} onClick={() => setDropdown(null)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
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
