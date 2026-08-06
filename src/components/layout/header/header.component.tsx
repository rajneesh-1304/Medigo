"use client";

import Image from "next/image";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import styles from "./header.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";

const navItems = [
  "Find Doctors",
  "Video Consult",
  "Medicines",
  "Lab Tests",
  "Surgeries",
];

const rightItems = [
  "For Corporates",
  "For Providers",
  "Security & Help",
];

export default function Header() {
  const router = useRouter();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <AppBar position="sticky" elevation={0} className={styles["header"]}>
        <Toolbar className={styles["toolbar"]}>
          <Box className={styles["logo"]}>
            <Image
              src="/Practo_New_Logo.png"
              alt="Practo"
              width={100}
              height={60}
              onClick={() => router.push("/")}
            />
          </Box>

          <Stack direction="row" spacing={4} className={styles["nav"]}>
            {navItems.map((item) => (
              <Typography key={item} className={styles["navItem"]}>
                {item}
              </Typography>
            ))}
          </Stack>

          <Stack direction="row" spacing={2} className={styles["rightNav"]}>
            {rightItems.map((item, idx) => (
              <Stack direction="row" spacing={1} key={idx} className={styles["rightItemContainer"]}>
                <Typography className={styles["rightItem"]}>{item}</Typography>
                <KeyboardArrowDownIcon />
              </Stack>
            ))}
            <Button
              variant="outlined"
              className={styles["loginBtn"]}
              onClick={() => router.push("/login")}
            >
              Login / Signup
            </Button>
          </Stack>

          <IconButton
            className={styles["menuBtn"]}
            onClick={() => setDrawerOpen(true)}
            aria-label="open menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        slotProps={{ paper: { className: styles["drawer"] } }}
      >
        <Box className={styles["drawerHeader"]}>
          <Image src="/Practo_New_Logo.png" alt="Practo" width={80} height={48} />
          <IconButton onClick={() => setDrawerOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} className={styles["drawerItem"]} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {rightItems.map((item, idx) => (
            <ListItem key={idx} className={styles["drawerItem"]} onClick={() => setDrawerOpen(false)}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        <Box className={styles["drawerActions"]}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => { router.push("/login"); setDrawerOpen(false); }}
            className={styles["drawerLoginBtn"]}
          >
            Login / Signup
          </Button>
        </Box>
      </Drawer>
    </>
  );
}