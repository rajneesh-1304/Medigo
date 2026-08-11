import { Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'
import styles from './cart-card.module.scss'

interface CartCardProps {
    title: string;
    price: number;
    description: string;
}

const CartCard = ({title, price, description}: CartCardProps) => {
    return (
        <Box className={styles['cart-card']}>
            <Box className={styles['cart-card-content']}>
                <Box className={styles['cart-card-header']}>
                    <Typography className={styles['cart-card-header-title']}>{title}</Typography>
                    <Typography className={styles['cart-card-header-price']}>${price}</Typography>
                </Box>
                {/* <Box className={styles['cart-card-body']}> */}
                    <Typography className={styles['cart-card-body-text']}>{description}</Typography>
                {/* </Box> */}
            </Box>
            <Divider />
            <Button className={styles['cart-card-button']}>Add to Cart</Button>
        </Box>
    )
}

export default CartCard