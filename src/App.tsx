import './index.css';
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  width: 100%;
`

function App() {
	const [markdown, setMarkdown] = useState('# Hello World');
	const [showGuide, setShowGuide] = useState(false);

	const onToggleGuide = () => {
		setShowGuide(!showGuide);
	};

	const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
		const { value } = event.target;
		setMarkdown(value);
	};

	return (
		<>
			<Header onToggleGuide={onToggleGuide} />
			{showGuide ? <MarkdownGuide /> : <></>}
      <Container>
        <MarkdownInput value={markdown} onChange={handleChange} />
        <MarkdownOutput markdown={markdown} />
      </Container>
		</>
	);
}

export default App;
