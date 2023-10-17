export default function RootLayout({
  children,
  player,
  alien
}: {
  children: React.ReactNode;
  player: React.ReactNode;
  alien: React.ReactNode;
}) {
  return <div>
    {children}
    {player}
    {alien}
    </div>;
}
