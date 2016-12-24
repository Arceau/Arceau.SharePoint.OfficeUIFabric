import * as React from 'react';
import { Button, ButtonType } from 'office-ui-fabric-react/lib/Button';
import { Label } from 'office-ui-fabric-react/lib/Label';

interface MainState {}
interface MainProps {}


export class MainComponent extends React.Component<MainState, MainProps> {

  constructor() {
    super();
  }

  private button_onClick= (e: React.MouseEvent<Button>) => {
    alert("Office UI Button Clicked");
    
    e.stopPropagation();
    e.preventDefault();
  }

  public render() {
    return (
      <div className='ms-BasicButtonsExample'>
        <Label>Office UI Fabric Button</Label>
        <Button
          buttonType={ ButtonType.primary }
          description='Description of the button'
          onClick={(e: React.MouseEvent<Button>) =>this.button_onClick(e)}>Press Me</Button>
      </div>
    );
  }
}