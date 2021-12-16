import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import immagine from './1_ISGtKTBwJem2C7tPfKL4-A.jpg'
import { Container } from '@mui/material'

export default function SignIn() {
  return (

    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justify="center" 
  style={{ minHeight: '100vh' }}
 >

  <Grid item xs={3}>
    <Card>
    <CardMedia
        component="img"
        height="140"
        image={immagine}
        alt="background Sign In"
      />
            <CardContent>
        <Button size="small">Sign In</Button>
      </CardContent>
    </Card>
  </Grid>      
 </Grid>
  )
}
