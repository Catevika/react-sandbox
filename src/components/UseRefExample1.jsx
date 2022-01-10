import { useRef } from 'react';

function UseRefExample1() {
	const inputRef = useRef();
	const pRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputRef.current.value);
		inputRef.current.value = 'Hello';
		inputRef.current.style.background = 'purple';
		inputRef.current.style.color = '#fff';
		pRef.current.innerText = 'Goodbye';
	};

	const handleClick = () => {
		inputRef.current.value = '';
		inputRef.current.style.background = '#fff';
		inputRef.current.style.color = '#000';
		inputRef.current.focus();
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='name'>Name</label>
				<input
					type='text'
					ref={inputRef}
					id='name'
					className='form-control mb-2'
				/>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
				<p onClick={handleClick} ref={pRef}></p>
			</form>
		</div>
	);
}

export default UseRefExample1;
