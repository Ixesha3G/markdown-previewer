import { ChangeEvent } from 'react';
import styled from 'styled-components';

interface MarkdownInputProps {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputContainer = styled.div`
	width: 50%;
	height: calc(100vh - 58.5px);
	padding: 20px;
	box-sizing: border-box;
`;

const StyledTextArea = styled.textarea`
	width: 100%;
	height: 100%;
	resize: none;
	border: none;
	padding: 10px;
	box-sizing: border-box;
	font-size: 16px;
	outline: none;
`;

const MarkdownInput = ({ value, onChange }: MarkdownInputProps): JSX.Element => {
    return (
        <InputContainer>
            <StyledTextArea defaultValue={value} onChange={(event) => onChange(event)}>
            </StyledTextArea>
        </InputContainer>
    )
};

export default MarkdownInput;
