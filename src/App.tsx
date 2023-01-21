import { FormEvent, useState } from "react";

//const synth = window.speechSynthesis;

const App = () => {
	const [input, setInput] = useState<string>("");
	const [selectedVoice] = useState<number>(0);

	const speak = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const synth = window.speechSynthesis;
		let utterance = new SpeechSynthesisUtterance(input);
		utterance.voice = synth.getVoices()[selectedVoice];
		synth.speak(utterance);
	};

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInput(e.target.value);
	};

	return (
		<form onSubmit={speak}>
			<input type="text" value={input} onChange={onChange} />
			<button type="submit">Say Something</button>
		</form>
	);
};

export default App;
