import { Grid, Input, Typography } from '@material-ui/core';
import * as React from 'react';

class SocketSearch extends React.Component<any, {}> {

  public render(): JSX.Element {
    return (
      <Grid container item xs={12} style={{ paddingTop: 0 }} spacing={0}>
        <Grid item xs={1}>
          <Input
            placeholder='min'
            value={this.props.socketsMin}
            onChange={this.props.onSocketsMinChange}
            style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs={1}>
          <Input
            placeholder='max'
            value={this.props.socketsMax}
            onChange={this.props.onSocketsMaxChange}
            style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs={1}>
          <Input
            placeholder='R'
            value={this.props.redSockets}
            onChange={this.props.onRedSocketChange}
            style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs={1}>
          <Input
            placeholder='G'
            value={this.props.greenSockets}
            onChange={this.props.onGreenSocketChange}
            style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs={1}>
          <Input
            placeholder='B'
            value={this.props.blueSockets}
            onChange={this.props.onBlueSocketChange}
            style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs={1}>
          <Input
            placeholder='W'
            value={this.props.whiteSockets}
            onChange={this.props.onWhiteSocketChange}
            style={{ marginRight: '8px' }} />
        </Grid>
        <Grid item xs={1}>
          <Input
            placeholder='A'
            value={this.props.abyssSockets}
            onChange={this.props.onAbyssSocketChange}
            style={{ marginRight: '8px' }} />
        </Grid>
      </Grid>
    );
  }
}

export default SocketSearch;
