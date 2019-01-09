import * as React from 'react';
import pencil from './images/pencil.png';
import './Item.css';

export interface Props {
	item: TodoItem;
	deleteItemId: (deletedItemId: string) => void;
	handleStatusChange:(itemId: string) => void;
	handleValueChange:(itemId: string, itemName: string) => void;
}

export interface TodoItem {
	id: string;
	name: string;
	isChecked: boolean;
}

class Item extends React.Component<Props> {

	public render() {
		return (
			<tr className={this.props.item.isChecked ? "strike" : ""}>
				<td>
					<input 
						type="checkbox"
						onChange={()=> this.props.handleStatusChange(this.props.item.id)}
						checked={this.props.item.isChecked}
						
				/>
			</td>
			<td>
			</td>
			<td>
				<button 
					type="button" 
					className="btn btn-light"
					onClick={() => this.props.handleValueChange(this.props.item.id, this.props.item.name)}
				>
					<img src={pencil} />
				</button>
			</td>
			<td>
				<button type="button" className="btn btn-danger"
						onClick={()=> this.props.deleteItemId(this.props.item.id)}>
					X
				</button>
			</td>
		</tr>
	);
	}
}

export default Item;