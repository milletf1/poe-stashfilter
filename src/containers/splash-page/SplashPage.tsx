import { Grid, Typography } from '@material-ui/core';
import * as React from 'react';

class SplashPage extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    return (
        <Grid
          style={{ height: '100vh', overflowY: 'hidden' }}
          container
          justify='center'
          alignItems='center'>
          <Typography align='center' variant='h1' gutterBottom>Stash Search</Typography>
        </Grid>
    );
  }
}

export default SplashPage;
