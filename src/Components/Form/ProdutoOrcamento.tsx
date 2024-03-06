import { useState, useEffect, MouseEventHandler } from "react";
import { NovoProduto, Produto } from "../../Service/Entities/Produto";
import { getAllProduto } from "../../Service/api/ProdutoApi";
import "./inputs.css";
import { produtosReservados } from "../../Service/Entities/Reserva";
import { FiTrash2 } from "react-icons/fi";

interface ProdutoOrcamentoProps {
    adicionarProdutoNovo: (novoProduto: NovoProduto, index: number) => void;
    adicionarProdutoExistente: (produtoReservado: produtosReservados, index: number) => void;
    index: number; 
}

export default function ProdutoOrcamento({ adicionarProdutoExistente, adicionarProdutoNovo, index }: ProdutoOrcamentoProps
) {

    const [data, setData] = useState<Produto[]>([]);
    const [produtoSelecionado, setProdutoSelecionado] = useState<Produto>();

    const [produtoInput, setProdutoInput] = useState<string>("");
    const [quantidadeInput, setQuantidadeInput] = useState<number>(0);
    const [precoUnitario, setPrecoUnitario] = useState<number>(0);
    const [referencia, setReferencia] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const osData = await getAllProduto();
                setData(osData);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    const handleProdutoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const id = (event.target.value);

        if (id == "outro") {
            setProdutoSelecionado(undefined)
        } else {
            setProdutoSelecionado(data.find((produto) => produto.id === id))
        }
    };

    const handleQuantidadeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value);
        setQuantidadeInput(isNaN(value) ? 0 : value);
    };

    const handleProdutoInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setProdutoInput(event.target.value);
    };

    const handlePrecoUnitarioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(event.target.value);
        setPrecoUnitario(isNaN(value) ? 0 : value);
    };

    const handleReferenciaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setReferencia(event.target.value);
    };

    const adicionarProduto = () => {
        if (produtoSelecionado) {
            const produto = {
                uuidProduto: produtoSelecionado.id,
                quantidade: quantidadeInput,
            }
            adicionarProdutoExistente(
                produto,
                index  
            );
            console.log(produto);
        } else {
            const produto = {
                produto: produtoInput,
                quantidade: quantidadeInput,
                precoUnitario,
                referencia,
            }
            adicionarProdutoNovo(
                produto,
                index 
            );
        }
    };

    return (
        <div onBlur={adicionarProduto}>
            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Produto
            </label>

            <div className="sm:col-span-3 flex justify-between items-center">

                <div className="mt-2">
                    <select
                        onChange={handleProdutoChange}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                        {data.map((produto) => (
                            <option key={produto.id} value={produto.id}>{produto.produto} - {produto.quantidade} unidades</option>
                        ))}
                        <option key={"outro"} value={"outro"}>Outro</option>
                    </select>
                </div>

                {produtoSelecionado == undefined ? (
                    <>
                        <input onChange={handleProdutoInputChange} placeholder="produto" type="text" />
                        <input onChange={handleQuantidadeChange} placeholder="quantidade" type="number" />
                        <input onChange={handlePrecoUnitarioChange} placeholder="Preço unitário" type="number" />
                        <input onChange={handleReferenciaChange} placeholder="Referência" type="text" />
                    </>
                ) : (
                    <>
                        <input value={produtoSelecionado?.produto} placeholder="produto" type="text" disabled />
                        <input onChange={handleQuantidadeChange} placeholder="quantidade" type="number" />
                        <input value={produtoSelecionado?.precoUnitario} placeholder="Preço unitário" type="number" disabled />
                        <input value={produtoSelecionado?.referencia} placeholder="Referência" type="text" disabled />
                    </>
                )
                }
                <button>
                    <FiTrash2/>
                </button>
            </div>
        </div>
    );
    //value={produtoSelecionado ? produtoSelecionado.id : "outro"}
                        
}