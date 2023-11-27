import { Container, Header, Content, Footer, Nav } from 'rsuite';
import Navbar from '../navbar';
import { getSession } from '@/actions';

export default async function LayoutWrapper({ children }) {
	const session = await getSession();
	return (
		<Container className='w-full h-screen'>
			<Header>
				<Navbar session={session} />
			</Header>
			<Content>{children}</Content>
			<Footer>Footer</Footer>
		</Container>
	);
}
