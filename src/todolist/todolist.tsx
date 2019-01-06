import * as React from 'react';
import './todolist.css';
import NewItem from './itemlist/new-item';
import Item from './itemlist/item';
import {ItemInterface} from './itemlist/item';
const uuid = require('uuidv4');

export interface Props {
}

export interface ComponentState {
	items: Array<ItemInterface>;
	itemName: string;
	itemId: string;
}

class ToDoList extends React.Component<Props, ComponentState> {
	public state: ComponentState = {
		items: [],
		itemName: '',
		itemId: ''
	}

	componentWillMount() {
		const items = [
			{id: '1', name: 'House cleaning'},
			{id: '2', name: 'Washing up'},
			{id: '3', name: 'Buy milk'}
		];
		this.setState((prevState: ComponentState) => ({
  			items: [...prevState.items, items[0], items[1], items[2]]
		}))
	}

  public render() {
    return (
 	<div>
 		<h1 className="text-center">Todo list</h1>
 		<NewItem setItem={(item) => this.setItem(item)} addItem={() => this.addItem() }/>
 		<table className="table table-striped">
    		<thead>
    			<tr>
    				<th scope="col" className="text-center" colSpan={4} >List</th>
    			</tr>
    		</thead>
    		<tbody>
 				{this.renderItem()} 
     		</tbody>
     	</table>
  	</div>
  	)
  }
	private setItem(itemName: string): void {
  		this.setState({itemName: itemName})
  	}

	private renderItem(): Array<JSX.Element> {
		const items = [];
	  
	  	for(const item of this.state.items) {
	  		items.push(
	    		<Item key={item.id} item={item} 
	    			deleteItem={(deletedItemId: string) => this.deleteItem(deletedItemId)} />
	    	)
	  	}
	    return items;
	}

	private addItem() {
		if (this.state.itemName.length > 0) {
			const newId = uuid();
			this.setState({itemId: newId});
			const item = {
				id: newId,
				name: this.state.itemName
			};

			this.setState((prevState: ComponentState) => ({
	  			items: [...prevState.items, item]
			}));
			console.log(this.state.items)
		} else {
			alert('Nothing entered!');
		}
	}

	private deleteItem(deletedItemId: string): void {
		this.setState({items: this.state.items.filter(item => item.id !== deletedItemId)})
	}
}

export default ToDoList;