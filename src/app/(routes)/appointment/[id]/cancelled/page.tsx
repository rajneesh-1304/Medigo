"use client"
import { Box, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'

const page = () => {
    const router = useRouter();

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '200px', height: '100vh' }}>
            <Box
                sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "12px",
                }}>
                Appointment Cancelled!
            </Box>
            <Typography
                sx={{ color: "var(--primary-600)", cursor: "pointer" }}
                onClick={() => router.push("/")}
            >
                Back to home page.
            </Typography>
        </Box>
    )
}

export default page