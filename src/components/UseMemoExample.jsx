import { useState, useEffect, useRef, useMemo } from 'react';

function UseMemoExample() {
	const [number, setNumber] = useState(1);
	const [inc, setInc] = useState(0);

	// const squareRoot = getSquareRoot(number);
	const squareRoot = useMemo(() => getSquareRoot(number), [number]);

	const renders = useRef(1);

	useEffect(() => {
		renders.current = renders.current + 1;
	}, []);

	const handleClick = () => {
		setInc((prevState) => {
			console.log(prevState + 1);
			return prevState + 1;
		});
	};

	return (
		<div>
			<input
				type='number'
				value={number}
				className='form-control w-25'
				onChange={(e) => setNumber(e.target.value)}
			/>

			<h2 className='my-3'>
				The sqrt of {number} is {squareRoot}
			</h2>

			<button onClick={handleClick} className='btn btn-primary'>
				Re-render
			</button>
			<h3>Increment: {inc}</h3>
			<h3>Renders: {renders.current}</h3>
		</div>
	);
}

function getSquareRoot(n) {
	for (let i = 0; i <= 5000; i++) console.log(i);
	console.log('Expensive Function Called');
	return Math.sqrt(n);
}

export default UseMemoExample;
