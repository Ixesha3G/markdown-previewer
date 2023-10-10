import styled from 'styled-components';

interface HeaderProps {
    onToggleGuide: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const HeaderContainer = styled.div`
	background-color: rgb(40, 44, 52);
	color: white;
	display: flex;
	justify-content: space-between;
	padding: 10px 20px;
	width: auto;
	align-items: center;
`;

const Title = styled.h1`
	margin: 0px;
`;

const Button = styled.button`
	padding: 10px;
	background-color: rgb(97, 218, 251);
	color: rgb(40, 44, 52);
	border: none;
	border-radius: 5px;
	cursor: pointer;
	font-size: 16px;
	transition: background-color 0.2s ease 0s;
	&:hover {
		background-color: rgb(55, 157, 185);
	}
`;

const Header = ({ onToggleGuide }: HeaderProps): JSX.Element => {
    

	return (
		<HeaderContainer>
			<Title>Markdown Previewer</Title>
			<Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
		</HeaderContainer>
	);
};

export default Header;
