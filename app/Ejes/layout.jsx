import { TabGroup } from '@/ui/TabGroup';

export default async function Layout({children}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/Ejes"
          items={[
            {
              text: 'Todos',
            },
            {
              text: 'EAV Remolcados',
              slug: 'Remolcados',
              segment: 'Remolcados',
            },
            {
              text: 'EAV Tractores',
              slug: 'Tractores',
              segment: 'Tractores',
            },
            {
              text: 'Estandar',
              slug: 'Estandar',
              segment: 'Estandar',
            },
            
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  );
}