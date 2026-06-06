export function generateStaticParams() {
  return [
    { id: 'luna' },
    { id: 'oliver' },
    { id: 'max' },
  ];
}

export default function AnimalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
