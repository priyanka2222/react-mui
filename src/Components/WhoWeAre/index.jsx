import React from 'react'
import { Typography, Box, Container, Grid, Card, CardContent } from '@mui/material';

export default function WhoWeAre() {
    return (
        <Box py={3} bgcolor="grey.200">
            <Container maxWidth="md">
                <Typography variant="h6" gutterBottom>
                    Who We Are
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Our Story
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ height: '100%' }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    Our Philosophy
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
