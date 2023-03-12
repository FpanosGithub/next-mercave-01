import { TabGroup } from '@/ui/TabGroup';

export default async function Layout({children}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/Vehiculos"
          items={[
            {
              text: 'Todos',
            },
            {
              text: 'Locomotoras',
              slug: 'Locomotoras',
              segment: 'Locomotoras',
            },
            {
              text: 'Vehiculos Auxiliares',
              slug: 'Auxiliares',
              segment: 'Auxiliares',
            },
            {
              text: 'Vagones',
              slug: 'Vagones',
              segment: 'Vagones',
            },
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}