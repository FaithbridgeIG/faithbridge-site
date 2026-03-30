export const metadata = {
  title: 'FaithBridge Insurance',
  description: 'FaithBridge Insurance launch site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
