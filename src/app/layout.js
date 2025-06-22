import './globals.css';

export const metadata = {
  title: 'EcoWorldBuy',
  description: 'Shop Sustainably, Live Consciously',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-[var(--text-color)] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
