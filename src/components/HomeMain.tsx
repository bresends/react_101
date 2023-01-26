import { Card } from './Card';
import { Devisio } from './Devisio';

export function HomeMain() {
  return (
    <div className="xl:container m-auto px-6 text-gray-600">
      <div className="mb-12 space-y-2 text-center py-10">
        <h2 className="text-3xl font-bold text-gray-800 md:text-4xl">
          Projetos React
        </h2>
        <p className="lg:mx-auto lg:w-6/12 text-gray-600">
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
          link="/1"
          image="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
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
