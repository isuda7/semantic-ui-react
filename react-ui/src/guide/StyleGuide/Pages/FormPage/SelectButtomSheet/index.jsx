import React, { useState, useEffect } from "react";
import { BottomSheet } from 'react-spring-bottom-sheet'
import { Button } from "semantic-ui-react";
import 'react-spring-bottom-sheet/dist/style.css'

const SelectButtomSheet = (props) => {
	const [isDisable, setIsDisabled] = useState(false);
	const [isValue, setIsValue] = useState(false);
	const [value, setValue] = useState('');
	const [open, setOpen] = useState(false);

	// Ensure it animates in when loaded
	useEffect(() => {
		if (typeof props.value === 'string' && props.value !== ''){
			setValue(props.value);
			setIsValue(true);
		} else if (typeof props.placeholder === 'string' && props.placeholder !== ''){
			setValue(props.placeholder);
		};
		setOpen(false);
	}, [value])
	useEffect(() => {
		if (props.disabled === 'true' || props.disabled === true ){
			setIsDisabled(props.disabled);
		}
	}, [])

	function onDismiss() {
		setOpen(false)
	}

	return (
		<>
			<Button className={"select"+ (isValue ? ' is_valued':'' )} onClick={() => setOpen(true)} disabled={isDisable}>{value}</Button>
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
				{props.children}
			</BottomSheet>
		</>
	)
}

export default SelectButtomSheet