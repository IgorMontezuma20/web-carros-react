import { Container } from "../../components/container";

export function Home() {
  return (
    <Container>
      <section className="bg-white p-4 rounded-lg w-full max-w-3xl mx-auto flex justify-center items-center gap-2">
        <input
          className="w-full border-2 rounded-lg h-9 px-3 outline-none"
          type="text"
          placeholder="Informe o nome do veículo..."
        />
        <button className="bg-red-500 h-9 px-8 rounded-lg text-white font-medium text-lg hover:bg-red-600 ">
          Buscar
        </button>
      </section>

      <h1 className="font-bold text-center mt-6 text-2xl mb-4">
        Carros novos e usados em todo o Brasil
      </h1>

      <main className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <section className="w-full bg-white rounded-lg">
          <img
            className="w-full rounded-lg mb-2 max-h-72 hover:scale-105 transition-all"
            src="https://image.webmotors.com.br/_fotos/anunciousados/gigante/2023/202309/20230913/bmw-x3-3.0-twinpower-gasolina-m40i-steptronic-wmimagem1429005287.jpg?s=fill&w=552&h=414&q=60"
            alt="Carro"
          />
          <p className="font-bold mt-1 mb-2 px-2">BMW X3</p>
          <div className="flex flex-col px-2">
            <span className="text-zinc-700 mb-6">
              ano 2022/2022 | 15.555 km
            </span>
            <strong className="text-black font-medium text-xl">
              R$ 489.900
            </strong>
          </div>
          <div className="w-full h-px bg-slate-200 my-2"></div>
          <div className="px-2 pb-2">
            <span className="text-zinc-700">São Paulo</span>
          </div>
        </section>
      </main>
    </Container>
  );
}
