import { Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

export const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const pretendard = localFont({
	src: [
		{
			path: './fonts/Pretendard-Regular.woff2',
			weight: '400',
		},
		{
			path: './fonts/Pretendard-Bold.woff2',
			weight: '700',
		}
	],
})