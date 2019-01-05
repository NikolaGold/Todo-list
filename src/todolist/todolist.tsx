import * as React from 'react';
import './todolist.css';
import NewItem from './itemlist/new-item';
import Item from './itemlist/item';
import ItemInterface from './itemlist/item';

export interface Props {
}

export interface ComponentState {
	items: Array<ItemInterface>;
	newItem: ItemInterface | null;
}

class ToDoList extends React.Component<Props, ComponentState> {
	public state: ComponentState = {
		items: [],
		newItem: null
	}

	componentWillMount() {
		const items = [{id: 'a', name: 'b'}];
		this.setState((prevState: ComponentState) => ({
  			items: [...prevState.items, items[0]]
		}))
	}

  public render() {
    return (
 	<div>
 		<h1>Todo list</h1>
 		<NewItem setItem={(item) => this.setItem(item)} addItem={() => this.addItem() }/>
 		<table className="table table-sm table-dark">
    		<thead>
    			<tr>
    				<th scope="col" className="text-center">List</th>
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
		const item = {
			id: '',
			name: itemName
		}
  		this.setState({newItem: item})
  	}

	private renderItem(): any {
	const items = [];
  
  	for(const item of this.state.items) {
  		items.push(
    		<Item key={item.id} item={item}  />
    	)
  	}
    return items;
	}

	private addItem() {
		this.setState((prevState: ComponentState) => ({
  			items: [...prevState.items, this.state.newItem]
		}))
	}
}

export default ToDoList;