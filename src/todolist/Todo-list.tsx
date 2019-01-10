import * as React from 'react';
import './Todo-list.css';
import NewItem from './new-item/New-item';
import Item from './item/Item';
import { TodoItem } from './item/Item';
const uuid = require('uuidv4');

export interface Props {
}

export interface ComponentState {
	items: Array<TodoItem>;
	itemId: string;
	itemName: string;
}

class TodoList extends React.Component<Props, ComponentState> {
	public state: ComponentState = {
		items: [],
		itemId: '',
		itemName: '',
	};

	componentWillMount() {
		const items = [
			{ isChecked: false, id: '1', name: 'House cleaning' },
			{ isChecked: false, id: '2', name: 'Washing up' },
			{ isChecked: false, id: '3', name: 'Buy milk' }
		];
		this.setState((prevState: ComponentState) => ({
			items: [...prevState.items, items[0], items[1], items[2]]
		}))
	}

	public render() {
		return (
			<div>
				<h1 className="text-center">Todo list</h1>
				<NewItem
					setItemName={(item) => this.setItemName(item)}
					addItem={() => this.addItem()}
					itemName={this.state.itemName}
				/>
				<table className="table table-striped">
					<thead>
						<tr>
							<th
								scope="col"
								className="text-center"
								colSpan={4}
							>
								List
					</th>
						</tr>
					</thead>
					<tbody>
						{this.renderItems()}
					</tbody>
				</table>
				<button
					type="button"
					className="btn btn-danger btn float-right"
					onClick={() => this.deleteAllCompletedTasks()}
				>
					Delete all completed tasks
		</button>
				<p>Number of uncompleted tasks:{this.getNumberOfUncompletedTasks()}</p>
			</div>
		)
	}
	private setItemName(itemName: string): void {
		this.setState({ itemName: itemName })
	}

	private renderItems(): Array<JSX.Element> {
		const items = [];

		for (const item of this.state.items) {
			items.push(
				<Item
					key={item.id}
					item={item}
					deleteItemId={(deletedItemId: string) => this.deleteItemId(deletedItemId)}
					handleStatusChange={(itemId: string) => this.handleStatusChange(itemId)}
					handleValueChange={(itemId: string, itemName: string) => this.handleValueChange(itemId, itemName)}
				/>
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
				isChecked: false
			};

			this.setState((prevState: ComponentState) => ({
				items: [...prevState.items, item],
				itemId: newId,
				itemName: '',
			}));
		} else {
			alert('Nothing entered!');
		}
	}

	private deleteItemId(deletedItemId: string): void {
		this.setState({ items: this.state.items.filter(item => item.id !== deletedItemId) })
	}

	private handleStatusChange(itemId: string): void {
		this.setState((prevState: ComponentState) => {
			const newItems: Array<TodoItem> = Object.assign([], prevState.items);

			newItems.forEach((item) => {
				if (item.id === itemId) {
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

	private handleValueChange(itemId: string, itemName: string): void {
		const newValue = prompt("Please enter your task", itemName);
		this.setState((prevState: ComponentState) => {
			const newItems: Array<TodoItem> = Object.assign([], prevState.items);

			newItems.forEach((item) => {
				if (item.id === itemId && newValue !== null) {
					item.name = newValue;
				}
			});

			return {
				items: newItems,
			}
		})
	}

	private deleteAllCompletedTasks(): void {
		this.setState({ items: this.state.items.filter(item => !item.isChecked) })
	}

}

export default TodoList;