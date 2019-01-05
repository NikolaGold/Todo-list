import * as React from 'react';
import pencil from './images/pencil.png';

export interface Props {
	item: ItemInterface;
}

export interface ItemInterface {
	id: string;
	name: string;
}

class Item extends React.Component<Props> {

  public render() {
    return (   
		<tr>
			<td>
				<input type="checkbox"/>
			</td>
			<td>
				{this.props.item.name}
			</td>
			<td>
				<button type="button" className="btn btn-light">
				<img src={pencil} />
				</button>
			</td>
			<td>
				<button type="button" className="btn btn-danger">X</button>
			</td>
  		</tr>
    );
  }
}

export default Item;