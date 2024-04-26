import logo from './assets/gate.jpg';
import './App.css';
import { Avatar, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([])

  const getUsers = () => {
    fetch('http://13.51.57.0:8080/api/getUsers')
    .then(res => res.json())
    .then(res => setUsers(res))
    .catch(error => console.log(error))
  }

  return (
    <div className="App">

      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Typography variant='h3' gutterBottom>
          Welcome to Heaven's gate
        </Typography>

        <Button
          variant='contained'
          onClick={getUsers}
          
        >
          Open Book of Life
        </Button>

        <Grid container spacing={2}>
          {users.map(user => (
            <BookCard key={user.id} user={user} />
          ))}
        </Grid>
      </header>
    </div>
  );
}

const BookCard = (user) => {

  return(
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt={user.name} src={user.image} />
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              {user.firstName} {user.lastName}
            </Typography>
            <Typography variant="body2">
              Email: {user.email}
            </Typography>
            <Typography variant="body2">
              Username: {user.username}
            </Typography>
            <Typography variant="body2">
              Age: {user.age}
            </Typography>
            <Typography variant="body2">
              Gender: {user.gender}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="textSecondary">
              Blood Group: {user.bloodGroup}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Height: {user.height} cm
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Department: {user.department}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default App;
