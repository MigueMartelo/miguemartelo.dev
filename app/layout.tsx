import { Providers } from './providers';

export const metadata = {
  title: 'MigueMartelo.Dev',
  description: 'Frontend Developer',
  icons: {
    icon: '/favicon.svg',
  },
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

export default RootLayout;
