import * as React from 'react';

export interface Props {
  addItem: () => void;
  setItem: (itemName:  string) => void;
}


class NewItem extends React.Component<Props> {
  public render() {
    return (
      <>
        <input onChange={(event) => this.props.setItem(event.target.value)}/> 
        <button  type="button" className="btn btn-success" onClick={() => this.props.addItem()}>+</button>
      </>
    )
  }
}

export default NewItem;