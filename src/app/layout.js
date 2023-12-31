import './globals.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'rsuite/dist/rsuite.min.css';
import { esAR } from 'rsuite/locales';
import { CustomProvider } from 'rsuite';
import LayoutWrapper from './components/layout-wrapper';
import { inter } from '@/lib/fonts';

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
	return (
		<html lang='es'>
			<body className={`${inter.className} antialiased`}>
				<CustomProvider theme='light' locale={esAR}>
					<LayoutWrapper>{children}</LayoutWrapper>
				</CustomProvider>
			</body>
		</html>
	);
}
