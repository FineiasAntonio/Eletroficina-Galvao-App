import { useEffect, useState } from "react";
import OrcamentoForm from "../OrcamentoForm";
import { Reserva, produtosReservados } from "../../../Service/Entities/Reserva";
import { NovoProduto } from "../../../Service/Entities/Produto";
import OSUpdateForm from "./OSUpdateForm";
import { useParams } from "react-router-dom";
import { OrdemServico, UpdateOrdemServicoDTO } from "../../../Service/Entities/OS";
import { getOSById } from "../../../Service/api/OSapi";

export default function UpdateForm() {

  let {id} = useParams();

  const [reserva, setReserva] = useState<Reserva>();
  const [OS, setOS] = useState<OrdemServico>();

  useEffect(() => {
    const fetchData = async () => {
        try {
            const Data = await getOSById(id);
            setOS(Data);
        } catch (error) {
            console.error(error);
        }
    };

    fetchData();
}, []);

  const setarReserva = (produtosExistentesInput: produtosReservados[], produtosNovosInput: NovoProduto[], maoDeObraInput: number) => {
    const Reserva = {
      produtosExistentes: produtosExistentesInput,
      produtosNovos: produtosNovosInput,
      maoDeObra: maoDeObraInput
    }
    setReserva(Reserva);
  }

  const setarOS = () => {

  }


  return (
    <div className="w-screen-md mx-auto">

      <div className="mt-4 p-4 bg-gray-100">
        <OSUpdateForm setarOS={setarOS} OS={OS}/>
        <OrcamentoForm setarReserva={setarReserva}/>
      </div>
      <hr/>
      <div className=" flex items-center justify-end gap-x-6 p-8 bg-gray-100">
                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Salvar
                </button>
            </div>
    </div>
  )
}