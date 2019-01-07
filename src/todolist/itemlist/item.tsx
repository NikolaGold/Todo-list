import * as React from 'react';
import pencil from './images/pencil.png';

export interface Props {
	item: ItemInterface;
	deleteItem: (deletedItemId: string) => void;
	handleChange:(itemId: string) => void;
}

export interface ItemInterface {
	id: string;
	name: string;
	isChecked: boolean;
}

class Item extends React.Component<Props> {

  public render() {
    return (   
		<tr>
			<td>
				<input 
					type="checkbox"
					onChange={()=> this.props.handleChange(this.props.item.id)}
					checked={this.props.item.isChecked}
				/>
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
				<button type="button" className="btn btn-danger" 
						onClick={()=> this.props.deleteItem(this.props.item.id)}>
					X
				</button>
			</td>
  		</tr>
    );
  }
}

export default Item;