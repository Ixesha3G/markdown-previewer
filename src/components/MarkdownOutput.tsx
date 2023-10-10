import styled from 'styled-components';
import Markdown from 'react-markdown'

interface MarkdownOutputProps {
    markdown: string
}

const OutputContainer = styled.div`
	width: 50%;
	height: calc(100vh - 58.5px);
	padding: 20px;
	box-sizing: border-box;
	overflow: auto;
	border-left: 1px solid rgb(221, 221, 221);
	background-color: rgb(249, 249, 249);
`;

const MarkdownOutput = ({ markdown }: MarkdownOutputProps): JSX.Element => {
    return (
        <OutputContainer>
            <Markdown>{markdown}</Markdown>
        </OutputContainer>
    )
}

export default MarkdownOutput;
