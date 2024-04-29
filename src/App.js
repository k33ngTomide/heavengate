import logo from './assets/gate.jpg';
import './App.css';
import { Avatar, Button, Card, CardContent, Grid, Typography, CircularProgress } from '@mui/material';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = () => {
    setLoading(true);
    fetch('http://13.51.143.76:8181/api/getUsers')
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setUsers(res.users);
        setLoading(false);
      })
      .catch(error => {
        console.log(error);
        setLoading(false);
      });
  };

  return (
    <div className="App" >
      <header className="App-header">
        <Typography variant='h3' gutterBottom>
          Welcome to Heaven's gate
        </Typography>

        <Button
          variant='contained'
          onClick={getUsers}
        >
          Open Book of Life
        </Button>

        {loading ? (
          <CircularProgress />
        ) : (
          <Grid container spacing={2} style={{display:'flex', alignItems: 'center', alignSelf:'center', paddingLeft: 30}}>
            {users.map(user => (
              <BookCard key={user.id} user={user} />
            ))}
          </Grid>
        )}
      </header>
    </div>
  );
}


const BookCard = (user) => {

  const {image, firstName, lastName, email, username, age, gender, bloodGroup, height, department} = user.user
  return(
    <Card variant="outlined" style={{margin: 20}}>
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Avatar alt={"userImage"} src={image} />
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div">
              {firstName} {lastName}
            </Typography>
            <Typography variant="body2">
              Email: {email}
            </Typography>
            <Typography variant="body2">
              Username: {username}
            </Typography>
            <Typography variant="body2">
              Age: {age}
            </Typography>
            <Typography variant="body2">
              Gender: {gender}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="Secondary">
              Blood Group: {bloodGroup}
            </Typography>
            <Typography variant="body1" color="Secondary">
              Height: {height} cm
            </Typography>
            <Typography variant="body1" color="Secondary">
              Department: {department}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )

}

export default App;
