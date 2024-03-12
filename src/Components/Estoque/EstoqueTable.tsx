import { format } from "date-fns";
import { useState, useEffect } from "react";
import { FaRegEye } from "react-icons/fa";
import { Produto } from "../../Service/Entities/Produto";
import { getAllProduto } from "../../Service/api/ProdutoApi";
import { TrashIcon } from "@heroicons/react/24/outline";
import { BsTrash } from "react-icons/bs";
import ModalProduto from "./ModalProduto";

export default function EstoqueTable() {

  const [data, setData] = useState<Produto[]>([]);
  const [modalAberto, setModalAberto] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const produtosData = await getAllProduto();
        setData(produtosData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  return (
    <>
    <div className="min-h-full">
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8 flex justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Estoque</h1>
            <div className='text-right'>
              <button 
              onClick={() => abrirModal()}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                Cadstrar novo produto
              </button>
            </div>
          </div>
        </header>
      </div>

    <div className="flex max-h-tela">
      <div className="w-1/2 text-center">
        <h1 className="text-2xl mb-neg mt-2">Estoque</h1>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg max-h-tela">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Produto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Referência
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Preço Unitário
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantidade
                  </th>
                  <th scope="col" className="px-6 py-3">
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 text-center" colSpan={8}>
                      Sem Dados
                    </td>
                  </tr>
                ) : (
                  data.map((produto) => (
                    <tr key={produto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">{produto.produto}</td>
                      <td className="px-6 py-4 text-center">{produto.referencia}</td>
                      <td className="px-6 py-4 text-center">{produto.precoUnitario}</td>
                      <td className="px-6 py-4 text-center">{produto.quantidade}</td>
                      <td className="px-6 py-4 text-right">
                        <a href="#" className="text-medium text-blue-600 dark:text-blue-500 hover:underline" ><BsTrash /></a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>


            </table>
          </div>
        </div>
      </div>
      <div className="text-center">
        <div className="h-1/2">
          <h1 className="text-2xl mb-neg mt-2">Produtos em falta</h1>
          <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg max-h-tela">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Produto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Preço Unitário
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 text-center" colSpan={8}>
                      Sem Dados
                    </td>
                  </tr>
                ) : (
                  data.filter(e => e.quantidade === 0).map((produto) => (
                    <tr key={produto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">{produto.produto}</td>
                      <td className="px-6 py-4 text-center">{produto.precoUnitario}</td>
                    </tr>
                  ))
                )}
              </tbody>


            </table>
          </div>
          </div>
        </div>
        <div>
          <h1 className="text-2xl my-neg"> Produtos reservados</h1>
        <div className="mx-auto py-6 sm:px-6 lg:px-8">
          <div className="overflow-x-auto bg-gray-500 shadow-md sm:rounded-lg max-h-tela">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
              <thead className="text-xs text-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Produto
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Referência
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Preço Unitário
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantidade
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.length === 0 ? (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="py-4 text-center" colSpan={8}>
                      Sem Dados
                    </td>
                  </tr>
                ) : (
                  data.map((produto) => (
                    <tr key={produto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="px-6 py-4">{produto.produto}</td>
                      <td className="px-6 py-4 text-center">{produto.referencia}</td>
                      <td className="px-6 py-4 text-center">{produto.precoUnitario}</td>
                      <td className="px-6 py-4 text-center">{produto.quantidade}</td>
                    </tr>
                  ))
                )}
              </tbody>


            </table>
          </div>
        </div>
        </div>
      </div>


    </div>
 
    <ModalProduto isOpen={modalAberto} onClose={fecharModal} />

    </>
  )
}