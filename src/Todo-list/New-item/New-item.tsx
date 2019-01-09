import * as React from 'react';

export interface Props {
	itemName: string;
	addItem: () => void;
	setItemName: (itemName: string) => void;
}


class NewItem extends React.Component<Props> {
	public render() {
		return (
			<>
				<input
					onChange={(event) => this.props.setItemName(event.target.value)}
					placeholder="You are writing here"
					aria-label="UserName"
					aria-describedby="basic-addon1"
					value={this.props.itemName}
				/>
				<button
					type="button"
					className="btn btn-success"
					onClick={() => this.props.addItem()}
				>
					+
				</button>
			</>
		)
	}
}

export default NewItem;]