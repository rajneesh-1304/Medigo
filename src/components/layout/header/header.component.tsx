"use client";

import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LocalHospitalRoundedIcon from "@mui/icons-material/LocalHospitalRounded";
import styles from "./header.module.scss";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
  { label: "Find Doctors", href: "/doctors" },
  { label: "Video Consult", href: "/consult" },
  { label: "Care Plans", href: "/care" },
  { label: "Lab Tests", href: "#" },
  { label: "Surgeries", href: "#" },
];

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}
      >
        <div className={styles.headerInner}>
          {/* Logo */}
          <button
            className={styles.headerLogoBtn}
            onClick={() => router.push("/")}
            aria-label="Go to home"
          >
            <span className={styles.headerLogoIcon}>
              <LocalHospitalRoundedIcon fontSize="inherit" />
            </span>
            <span className={styles.headerLogoText}>
              medi
              <span className={styles.headerLogoAccent}>go</span>
            </span>
          </button>

          {/* Desktop nav — pill tabs */}
          <nav className={styles.headerNav} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.headerNavLink} ${
                  pathname === link.href ? styles.headerNavLinkActive : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side */}
          <div className={styles.headerRightSide}>
            <button
              className={styles.headerGhostBtn}
              onClick={() => router.push("/login")}
            >
              Sign in
            </button>
            <button
              className={styles.headerCtaBtn}
              onClick={() => router.push("/register")}
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <IconButton
            className={styles.headerMenuBtn}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { className: styles.headerDrawer } }}
      >
        <Box className={styles.headerDrawerHeader}>
          <span className={styles.headerDrawerLogo}>
            <LocalHospitalRoundedIcon fontSize="small" />
            medi
            <span className={styles.headerLogoAccent}>go</span>
          </span>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            className={styles.headerDrawerClose}
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />

        <List sx={{ pt: 1 }}>
          {navLinks.map((link) => (
            <ListItem
              key={link.label}
              className={styles.headerDrawerItem}
              onClick={() => {
                router.push(link.href);
                setDrawerOpen(false);
              }}
            >
              <ListItemText primary={link.label} />
            </ListItem>
          ))}
        </List>

        <Box className={styles.headerDrawerFooter}>
          <Button
            fullWidth
            variant="outlined"
            className={styles.headerDrawerSignIn}
            onClick={() => {
              router.push("/login");
              setDrawerOpen(false);
            }}
          >
            Sign in
          </Button>
          <Button
            fullWidth
            variant="contained"
            className={styles.headerDrawerCta}
            onClick={() => {
              router.push("/register");
              setDrawerOpen(false);
            }}
          >
            Get Started Free
          </Button>
        </Box>
      </Drawer>
    </>
  );
}