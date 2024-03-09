import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react';
import { Funcionario } from '../../../Service/Entities/Funcionario';
import { OSCreateRequest, OrdemServico, UpdateOrdemServicoDTO } from '../../../Service/Entities/OS';
import { getAllFuncionario } from '../../../Service/api/FuncionarioApi';

interface FormProps {
    setarOS: (
        OSRequest: UpdateOrdemServicoDTO
    ) => void;
    OS: OrdemServico;
}

export default function OSForm({setarOS, OS}: FormProps) {

    const [data, setData] = useState<Funcionario[]>([]);

    const [formData, setFormData] = useState<UpdateOrdemServicoDTO>({
        nome: OS.nome,
        cpf: OS.cpf,
        telefone: OS.telefone,
        endereco: OS.endereco,
        equipamento: OS.equipamento,
        numeroSerie: OS.numeroSerie,
        servico: OS.servico,
        dataSaida: OS.dataSaida,
        funcionarioId: OS.funcionario.id,
        observacao: OS.observacao,
        comentarios: OS.comentarios,
        concluido: OS.situacao == "CONCLUIDO",
        subSituacao: OS.subSituacao
    });

    useEffect(() => {
        setarOS(formData);
    }, [formData]);

    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const Data = await getAllFuncionario();
                setData(Data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <form>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

                            {/* Nome */}
                            <div className="sm:col-span-2">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Cliente
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="nome"
                                            value={formData.nome}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Cliente"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* CPF/CNPJ */}
                            <div className='sm:col-span-2'>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    CPF/CNPJ
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="cpf"
                                            value={formData.cpf}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="CPF/CNPJ"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Telefone */}
                            <div className='sm:col-span-2'>
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Telefone
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="number"
                                            name="telefone"
                                            value={formData.telefone}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Telefone"
                                        />
                                    </div>

                                </div>
                            </div>

                            {/* Endereço */}
                            <div className="col-span-full">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Endereço
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="endereco"
                                            value={formData.endereco}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Endereço"
                                        />
                                    </div>

                                </div>

                            </div>

                            <hr className='col-span-full' />

                            {/* Equipamento */}
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Equipamento
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="equipamento"
                                            value={formData.equipamento}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Equipamento"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Serial */}
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Número de série
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="serial"
                                            value={formData.numeroSerie}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Número de série"
                                        />
                                    </div>

                                </div>

                            </div>

                            <hr className='col-span-full' />

                            {/* Serviço */}
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Serviço
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="text"
                                            name="servico"
                                            value={formData.servico}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                            placeholder="Serviço"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Data de saída */}
                            <div className="sm:col-span-3">
                                <label className="block text-sm font-medium leading-6 text-gray-900">
                                    Data prevista
                                </label>
                                <div className="mt-2">
                                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                        <input
                                            type="date"
                                            name="dataSaida"
                                            value={formData.dataSaida.toISOString().split('T')[0]}
                                            onChange={handleInputChange}
                                            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        />
                                    </div>

                                </div>

                            </div>

                            {/* Funcionário */}
                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                    Funcionário Responsável
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="funcionario"
                                        name="funcionario"
                                        value={formData.funcionarioId}
                                        onChange={handleInputChange}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        {
                                            data.map((funcionario) => {

                                                return (
                                                    <option key={funcionario.id} value={funcionario.id}>{funcionario.nome}</option>
                                                )

                                            })
                                        }
                                    </select>
                                </div>
                            </div>

                            {/* OBS do cliente */}
                            <div className="col-span-full">
                                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                    Observações do cliente
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="observacao"
                                        name="observacao"
                                        value={formData.observacao}
                                        onChange={handleInputChange}
                                        rows={3}
                                        className="p-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                    Cover photo
                                </label>
                                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                    <div className="text-center">
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                            <label
                                                htmlFor="file-upload"
                                                className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                            >
                                                <span>Upload a file</span>
                                                <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                            </label>
                                            <p className="pl-1">or drag and drop</p>
                                        </div>
                                        <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </form>

        </>
    )
}