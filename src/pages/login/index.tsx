import { Link } from "react-router-dom";
import logoIMg from "../../assets/logo.svg";

import { Container } from "../../components/container";
import { Input } from "../../components/input";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .email("Informe um email válido")
    .nonempty("O campo email é obrigatório"),
  password: z.string().nonempty("O campo senha é obrigatório"),
});

type FormData = z.infer<typeof schema>;

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <Container>
      <div className="w-full min-h-screen flex justify-center items-center flex-col gap-4">
        <Link className="mb-6 max-w-sm w-full" to="/">
          <img className="w-full" src={logoIMg} alt="Logo Web Carros" />
        </Link>

        <form
          className="bg-white
        max-w-xl w-full rounded-lg p-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <Input
              type="email"
              placeholder="Informe seu email..."
              name="email"
              error={errors.email?.message}
              register={register}
            />
          </div>
          <div className="mb-3">
            <Input
              type="password"
              placeholder="Informe sua senha"
              name="password"
              error={errors.password?.message}
              register={register}
            />
          </div>

          <button
            className="bg-zinc-900 w-full rounded-md text-white h-10 font-medium"
            type="submit"
          >
            Acessar
          </button>
        </form>
        <Link to="/register">Não possui uma conta? Registre-se agora!</Link>
      </div>
    </Container>
  );
}
