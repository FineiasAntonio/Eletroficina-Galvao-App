import { useState } from "react";
import OSForm from "./OSForm";
import OrcamentoForm from "./OrcamentoForm";
import { Reserva, produtosReservados } from "../../Service/Entities/Reserva";
import { NovoProduto } from "../../Service/Entities/Produto";
import { OSCreateRequest } from "../../Service/Entities/OS";

export default function Form() {

  const [reserva, setReserva] = useState<Reserva>();
  const [osRequest, setOsRequest] = useState<OSCreateRequest>();

  const setarReserva = (produtosExistentesInput: produtosReservados[], produtosNovosInput: NovoProduto[], maoDeObraInput: number) => {
    const Reserva = {
      produtosExistentes: produtosExistentesInput,
      produtosNovos: produtosNovosInput,
      maoDeObra: maoDeObraInput
    }
    setReserva(Reserva);
  }

  const setarOS = (OSRequest: OSCreateRequest) => {
    setOsRequest(OSRequest);
  }

  const envia = () => {
    console.log(osRequest)
    console.log(reserva);
}

  return (
    <div className="w-screen-md mx-auto">

      <div className="mt-4 p-4 bg-gray-100">
        <OSForm setarOS={setarOS} />
        <OrcamentoForm setarReserva={setarReserva}/>
      </div>
      <hr/>
      <div className=" flex items-center justify-end gap-x-6 p-8 bg-gray-100">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancelar
                </button>
                <button
                    onClick={envia}
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Salvar
                </button>
            </div>
    </div>
  )
}