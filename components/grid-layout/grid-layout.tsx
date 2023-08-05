import { Grid } from '@mui/material'
import React, { ReactNode } from 'react'


interface GridLayoutProps {
    children: ReactNode;
}

const GridLayout: React.FC<GridLayoutProps> = ({ children }) => {
    return (
        <Grid container spacing={4} justifyContent="center">
            {children}
        </Grid>
    )
}

export default GridLayout