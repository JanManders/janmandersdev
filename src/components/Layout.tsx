// Layout.tsx
// Reusable layout wrapper that applies consistent width and padding to all pages.
// Used in App.tsx to standardize layout across routes.

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return <main className="layout-wrapper">{children}</main>
}
