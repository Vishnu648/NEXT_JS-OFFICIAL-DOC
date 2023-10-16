export default function DashboardLayout({children,}: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        {/* <nav>nested layout</nav> */}
   
        {children}
      </section>
    )
  }