import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import LocalHospitalRoundedIcon from '@mui/icons-material/LocalHospitalRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import styles from './footer.module.scss';

const footerColumns = [
  {
    heading: 'Platform',
    links: [
      { label: 'Find Doctors', href: '/doctors' },
      { label: 'Video Consult', href: '/consult' },
      { label: 'Care Plans', href: '/care' },
      { label: 'Lab Tests', href: '#' },
      { label: 'Surgeries', href: '#' },
    ],
  },
  {
    heading: 'For Providers',
    links: [
      { label: 'Doctor Profile', href: '#' },
      { label: 'Clinic Management', href: '#' },
      { label: 'Hospital Suite', href: '#' },
      { label: 'Partner with Us', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press', href: '#' },
      { label: 'Contact', href: '#' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  },
];

const socialLinks = ['Twitter', 'LinkedIn', 'Instagram', 'YouTube'];

export const Footer = () => {
  return (
    <Box component="footer" className={styles.footer}>
      <Box className={styles.footerAccentBar} aria-hidden="true" />

      <Box className={styles.footerInner}>
        <Box className={styles.footerBrandCol}>
          <Box className={styles.footerLogoMark}>
            <Box component="span" className={styles.footerLogoIconWrap}>
              <LocalHospitalRoundedIcon fontSize="inherit" />
            </Box>
            <Box component="span" className={styles.footerLogoText}>
              medi<Box component="span" className={styles.footerLogoAccent}>go</Box>
            </Box>
          </Box>

          <Typography component="p" className={styles.footerTagline}>
            Modern healthcare, instantly accessible. Connect with top doctors,
            book labs, and manage your wellness — all in one place.
          </Typography>

          <Box className={styles.footerSocialRow}>
            {socialLinks.map((s) => (
              <Box key={s} component="a" href="#" className={styles.footerSocialPill} aria-label={s}>
                {s}
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={styles.footerLinkGrid}>
          {footerColumns.map((col) => (
            <Box key={col.heading} className={styles.footerLinkCol}>
              <Typography component="h4" className={styles.footerColHeading}>{col.heading}</Typography>
              <Box component="ul" className={styles.footerLinkList}>
                {col.links.map((link) => (
                  <Box component="li" key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box className={styles.footerBottomStrip}>
        <Typography component="span" className={styles.footerCopyright}>
          © {new Date().getFullYear()} Medigo. All rights reserved.
        </Typography>
        <Typography component="span" className={styles.footerMadeWith}>
          Made with <FavoriteRoundedIcon className={styles.footerHeartIcon} /> for better health
        </Typography>
      </Box>
    </Box>
  );
};
