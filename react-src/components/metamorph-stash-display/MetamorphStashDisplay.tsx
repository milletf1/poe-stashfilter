import * as React from 'react';
import './metamorph-stash-display.scss';

export default class MetamorphStashDisplay extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      active: 'brain',
    };
  }

  public render(): JSX.Element {
    return (
      <div className='metamorph-stashtab'>
        <div className='section-selector'>
          {
            this.props.sections.map((section: string) => (
                <div
                  className={`${section} button ${this.state.active === section ? 'active' : ''}`}
                  onClick={(e) => this.onSectionClick(section)}
                />
              ),
            )
          }
        </div>
      </div>
    );
  }

  public onSectionClick(section: string): void {
    this.setState({ active: section });
  }
}
