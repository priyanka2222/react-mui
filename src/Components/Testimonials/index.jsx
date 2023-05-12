import React from 'react'
import { Typography, Box, Container, Card, CardContent, CardMedia } from '@mui/material';

export default function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            photo: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
            rating: 5,
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
        {
            id: 2,
            name: 'Jane Lui',
            photo: 'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMHBpY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=60',
            rating: 4,
            testimonial: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.'
        },
    ]
  return (
    <Box py={3} bgcolor="primary.dark" color="white">
        <Container maxWidth="md">
            <Typography variant="h5" align="center" gutterBottom>
                Testimonials
            </Typography>
            {testimonials.map((testimonial) => {
                return(
                    <Card key={testimonial.id} sx={{display: 'flex', mb: 2}}>
                    <CardMedia component="img" src={testimonial.photo} alt={testimonial.name} sx={{width: 120, objectFit: 'cover'}} />
                    <CardContent>
                        <Typography variant="subtitle1" component="div">
                            {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" gutterBottom>Rating: {testimonial.rating}</Typography>
                        <Typography variant="body2" color="text.secondary">{testimonial.testimonial}</Typography>
                    </CardContent>
                </Card>
                )
            }) 
            }
        </Container>
    </Box>
  )
}
