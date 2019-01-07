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
	itemId: string;
	itemName: string;
}

class ToDoList extends React.Component<Props, ComponentState> {
	public state: ComponentState = {
		items: [],
		itemId: '',
		itemName: ''
	};

	componentWillMount() {
		const items = [
			{isChecked:false, id: '1', name: 'House cleaning'},
			{isChecked:false, id: '2', name: 'Washing up'},
			{isChecked:false, id: '3', name: 'Buy milk'}
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
 				{this.renderItems()} 
     		</tbody>
     	</table>
     	<p>Number of completed tasks:{this.getNumberOfUncompletedTasks()}</p>
  	</div>
  	)
  }
	private setItem(itemName: string): void {
  		this.setState({itemName: itemName})
  	}

	private renderItems(): Array<JSX.Element> {
		const items = [];
	  
	  	for(const item of this.state.items) {
	  		items.push(
	    		<Item key={item.id} item={item} 
	    			deleteItem={(deletedItemId: string) => this.deleteItem(deletedItemId)}
	    			handleChange={(itemId: string)=> this.handleChange(itemId)}/>
	    	)
	  	}
	    return items;
	}

	private addItem() {
		if (this.state.itemName.length > 0) {
			const newId = uuid();
			const item = {
				id: newId,
				name: this.state.itemName,
				isChecked:false
			};

			this.setState((prevState: ComponentState) => ({
	  			items: [...prevState.items, item],
	  			itemId: newId
			}));
		} else {
			alert('Nothing entered!');
		}
	}

	private deleteItem(deletedItemId: string): void {
		this.setState({items: this.state.items.filter(item => item.id !== deletedItemId)})
	}

	private handleChange(itemId: string): void {
		this.setState((prevState: ComponentState) => {
		 	const newItems:Array<ItemInterface> = Object.assign([], prevState.items);

		 	newItems.forEach((item) => {
		 		if(item.id === itemId){
		 			item.isChecked = !item.isChecked;
		 		}
		 	});

			return { 
				items: newItems,
			}
		})
    };

    private getNumberOfUncompletedTasks(): number {
    	return this.state.items.filter(item => !item.isChecked).length;
    }

}

export default ToDoList;