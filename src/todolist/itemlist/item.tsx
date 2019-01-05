import * as React from 'react';

export interface Props {
	item: ItemInterface
}

export interface ItemInterface {
	id: string;
	name: string;
}

class Item extends React.Component<Props> {

  public render() {
    return (   
		<tr>
			<td>{this.props.item.name}</td>
			<td><button type="button" className="btn btn-danger">-</button></td>
  		</tr>
    );
  }
}

export default Item;