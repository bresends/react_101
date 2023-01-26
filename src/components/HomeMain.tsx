import { Card } from './Card';

export function HomeMain() {
  return (
    <div className="m-auto px-6 text-gray-600 xl:container">
      <div className="mb-12 space-y-2 py-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Projetos React
        </h2>
        <p className="text-gray-600 lg:mx-auto lg:w-6/12">
          Coleção de projetos ReactJS com utilização de core features do como
          componentização, gerenciamento de estado, navegação, integração com
          APIs externas e outras técnicas avançadas, como uso de bibliotecas
          complementares e boas práticas de desenvolvimento.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card
          title="Lembretes de Aniversário."
          description="Projeto de lembretes de aniversário, com cadastro de aniversariantes e
              e notificação dos aniversariantes do dia."
          link="/birthday"
          image="https://react-projects.netlify.app/_next/image?url=https%3A%2F%2Fv5.airtableusercontent.com%2Fv1%2F14%2F14%2F1673892000000%2FNNPWanECoOoTMVZ5PjUHVA%2Fe9wpchBkURBcARf3kjs-veILCRL2Wh0udBZ9f5SzXMUkXpMRHP374RpOw9b1gJPO-uOo2_C7AEermW0aqfDWpq-pTQoOayClpP3shu4MmGeWjBAohwWSw7Bl3rFtGaWd%2FeF1Rjxw-C8hWc9IH9ZBaDtp4YhtKvnTLt9me5wskjuA&w=3840&q=75"
        />
        <Card
          description="Voluptates harum aliquam totam, doloribus eum impedit atque!
              Temporibus..."
          title="De fuga fugiat lorem ispum laboriosam expedita."
          link="/"
          image="https://images.unsplash.com/photo-1491895200222-0fc4a4c35e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
        />
        <Card
          description="Voluptates harum aliquam totam, doloribus eum impedit atque!
              Temporibus..."
          title="De fuga fugiat lorem ispum laboriosam expedita."
          link="/"
          image="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
        />
      </div>
    </div>
  );
}
