"use client";

import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import styles from './faq.module.scss';
import { useState } from "react";

const Faq = () => {
    const [expanded, setExpanded] = useState<number | null>(null);

    const data = [
        {
            question: "What is online doctor consultation?",
            answer:
                "Online doctor consultation or online medical consultation is a method to connect patients and doctors virtually. It is a convenient and easy way to get online doctor advice using doctor apps or telemedicine apps or platforms, and the internet.",
        },
        {
            question: "How do I start an online consultation with doctors on Medigo?",
            answer: `Starting an online doctor consultation is very simple on Medigo.
                Follow these 4 simple steps:
                • Choose your health concern.
                • Connect with a doctor within 2 minutes.
                • Ask your queries via an audio or video call.
                • Get a valid online doctor prescription and a 3-day free follow-up consultation.`,
        },
        {
            question: "Are your online doctors qualified?",
            answer:
                "We follow a strict verification process for every doctor providing online medical services on Medigo. Our team manually verifies necessary documents, registrations, and certifications for every doctor.",
        },
        {
            question: "Is online doctor consultation safe and secured on Medigo?",
            answer:
                "The privacy of our patients is critical to us, and thus, we are compliant with industry standards like ISO 27001. Rest assured that your online consultation with a doctor is completely safe and secured with 256-bit encryption.",
        },
        {
            question: "What happens if I don't get a response from a doctor?",
            answer:
                "In the unlikely event that an online doctor does not respond, you will be entitled to a 100% refund.",
        },
        {
            question: "Can I do a free online doctor consultation on Medigo?",
            beforeLink:
                "Avail a free online consultation with top doctors in India during the India Health Hour. Click ",
            link: {
                text: "here",
                href: "https://www.practo.com",
            },
            afterLink:
                " for more details. We have the free questions service available on our health app only. Ask a question and get free online medical advice within 24 to 48 hours.",
        },
    ];

    return (
        <>
            <Box className={styles['faq-wrapper']}>
                <Typography className={styles['faq-title']}>FAQs</Typography>

                <Box className={styles['faq-cards']}>
                    {data.map((item, idx) => {
                        const isExpanded = expanded === idx;

                        return (
                            <Box className={styles['faq-card']} key={idx}>
                                <Box
                                    className={styles['question-wrapper']}
                                    onClick={() => setExpanded(isExpanded ? null : idx)}
                                    sx={{ cursor: "pointer" }}
                                >
                                    {isExpanded ? (
                                        <ArrowDropDownIcon className={styles['arrow-icon']} />
                                    ) : (
                                        <ArrowRightIcon className={styles['arrow-icon']} />
                                    )}
                                    <Typography className={styles['question-text']}>
                                        {item.question}
                                    </Typography>
                                </Box>

                                <Typography
                                    className={styles['answer-text']}
                                    sx={{ whiteSpace: "pre-line" }}
                                >
                                    {item.answer ? (
                                        <>
                                            {isExpanded || (item.answer || "").length <= 90
                                                ? item.answer
                                                : (item.answer || "").substring(0, 90) + "..."}{" "}

                                            {(item.answer || "").length > 90 && (
                                                <Typography
                                                    component="span"
                                                    className={styles['read-more']}
                                                    onClick={() => setExpanded(isExpanded ? null : idx)}
                                                >
                                                    {isExpanded ? " Read Less" : " Read More"}
                                                </Typography>
                                            )}
                                        </>
                                    ) : (
                                        <>
                                            {isExpanded ? (
                                                <>
                                                    {item.beforeLink}
                                                    <Link
                                                        href={item.link?.href || "#"}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {item.link?.text}
                                                    </Link>
                                                    {item.afterLink}
                                                </>
                                            ) : (
                                                (item.beforeLink || "").substring(0, 90) + "..."
                                            )}{" "}

                                            <Typography
                                                component="span"
                                                className={styles['read-more']}
                                                onClick={() => setExpanded(isExpanded ? null : idx)}
                                            >
                                                {isExpanded ? " Read Less" : " Read More"}
                                            </Typography>
                                        </>
                                    )}
                                </Typography>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box className={styles['consult-now-wrapper']}>
                <Box className={styles['consult-now-card']}>
                    <Box className={styles['text-box']}>
                        <Typography className={(styles['health-concern'] + ' ' + styles['msg'])}>Still delaying your health concerns ?</Typography>
                        <Typography className={styles['health-concern']}>Connect with India's top doctors online</Typography>
                    </Box>
                    <Button variant="contained" className={styles['btnn']}>Consult Now</Button>
                </Box>
            </Box>
        </>
    );
};

export default Faq;