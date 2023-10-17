export default function RootLayout({
  children,
  player,
  alien
}: {
  children: React.ReactNode;
  player: React.ReactNode;
  alien: React.ReactNode;
}) {
  return <div className="flex border h-screen border-white gap-1 justify-around py-4">
    {children}
    {player}
    {alien}
    </div>;
}
