import { Grid, Input, Typography } from '@material-ui/core';
import * as React from 'react';

class DpsSearch extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render(): JSX.Element {
    return (
      <Grid container item xs={6} spacing={2} alignContent='flex-start'>
        <Grid item xs={12} style={{ paddingBottom: 0 }}>
          <Typography variant='h6'>DPS</Typography>
        </Grid>
        <Grid container item xs={3} alignItems='center' style={{ paddingTop: 0 }}>
          <Typography variant='body2'>Physical DPS</Typography>
        </Grid>
        <Grid container item xs={9} style={{ paddingTop: 0 }} spacing={0}>
          <Grid item xs={6}>
            <Input
              placeholder='min'
              value={this.props.physicalDpsMin}
              onChange={this.props.onPhysicalDpsMinChange}
              style={{ marginRight: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            <Input
              placeholder='max'
              value={this.props.physicalDpsMax}
              onChange={this.props.onPhysicalDpsMaxChange}
              style={{ marginLeft: '8px' }} />
          </Grid>
        </Grid>
        <Grid container item xs={3} alignItems='center'>
          <Typography variant='body2'>Elemental DPS</Typography>
        </Grid>
        <Grid container item xs={9} spacing={0}>
          <Grid item xs={6}>
            <Input
              placeholder='min'
              value={this.props.elementalDpsMin}
              onChange={this.props.onElementalDpsMinChange}
              style={{ marginRight: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            <Input
              placeholder='max'
              value={this.props.elementalDpsMax}
              onChange={this.props.onElementalDpsMaxChange}
              style={{ marginLeft: '8px' }} />
          </Grid>
        </Grid>
        <Grid container item xs={3} alignItems='center'>
          <Typography variant='body2'>Total DPS</Typography>
        </Grid>
        <Grid container item xs={9} spacing={0}>
          <Grid item xs={6}>
            <Input
              placeholder='min'
              value={this.props.totalDpsMin}
              onChange={this.props.onTotalDpsMinChange}
              style={{ marginRight: '8px' }} />
          </Grid>
          <Grid item xs={6}>
            <Input
              placeholder='max'
              value={this.props.totalDpsMax}
              onChange={this.props.onTotalDpsMaxChange}
              style={{ marginLeft: '8px' }} />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default DpsSearch;
