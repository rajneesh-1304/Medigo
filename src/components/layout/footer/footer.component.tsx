import React from 'react';
import Link from 'next/link';
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
    <footer className={styles.footer}>
      {/* Gradient accent bar */}
      <div className={styles.footerAccentBar} aria-hidden="true" />

      <div className={styles.footerInner}>
        {/* Brand column */}
        <div className={styles.footerBrandCol}>
          <div className={styles.footerLogoMark}>
            <span className={styles.footerLogoIconWrap}>
              <LocalHospitalRoundedIcon fontSize="inherit" />
            </span>
            <span className={styles.footerLogoText}>
              medi<span className={styles.footerLogoAccent}>go</span>
            </span>
          </div>

          <p className={styles.footerTagline}>
            Modern healthcare, instantly accessible. Connect with top doctors,
            book labs, and manage your wellness — all in one place.
          </p>

          <div className={styles.footerSocialRow}>
            {socialLinks.map((s) => (
              <a key={s} href="#" className={styles.footerSocialPill} aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {/* Link grid */}
        <div className={styles.footerLinkGrid}>
          {footerColumns.map((col) => (
            <div key={col.heading} className={styles.footerLinkCol}>
              <h4 className={styles.footerColHeading}>{col.heading}</h4>
              <ul className={styles.footerLinkList}>
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className={styles.footerBottomStrip}>
        <span className={styles.footerCopyright}>
          © {new Date().getFullYear()} Medigo. All rights reserved.
        </span>
        <span className={styles.footerMadeWith}>
          Made with <FavoriteRoundedIcon className={styles.footerHeartIcon} /> for better health
        </span>
      </div>
    </footer>
  );
};
