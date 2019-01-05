import * as React from 'react';

export interface Props {
  addItem: () => void;
  setItem: (itemName:  string) => void;
}


class NewItem extends React.Component<Props> {
  public render() {
    return (
      <div>
        <input onChange={(event) => this.props.setItem(event.target.value)}  placeholder="You are writing here" aria-label="UserName" aria-describedby="basic-addon1"/> 
        <button  type="button" className="btn btn-success" onClick={() => this.props.addItem()}>
          +
        </button>
      </div>
    )
  }
}

export default NewItem;