import React, { useState, useMemo } from "react";
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button } from "semantic-ui-react";
import 'react-spring-bottom-sheet/dist/style.css'

const SelectButtomSheet = (props) => {
	const [open, setOpen] = useState(false);
	const [value] = useState(() => {
		return (typeof props.value === 'string') ? props.value : '';
	});
	const text = useMemo(() => {
		return (value === '') ? props.placeholder : props.value;
	}, [value]);

	const items = props.items.map((menu) => (<li><Button>{menu}</Button></li>));

	function onDismiss() {
		setOpen(false)
	}

	return (
		<>
			<Button
				className={"select"+ (props.value === '' ? ' is_valued':'')}
				disabled={(props.disabled ? true : false)}
				onClick={() => setOpen(true)}
			>{text}</Button>
			<BottomSheet
				/* Options: https://github.com/stipsan/react-spring-bottom-sheet */
				open={open}
				onDismiss={onDismiss}
				snapPoints={({ minHeight }) => 400}
				header={
					<h2>Header Sticky</h2>
				}
				footer={
					<Button onClick={onDismiss} className="primary">
						Close
					</Button>
				}
			>
				<div className="in_sec">
					<ul>
						{ items }
					</ul>
				</div>
			</BottomSheet>
		</>
	)
}

export default SelectButtomSheet