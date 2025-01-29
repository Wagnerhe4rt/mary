import Link from "next/link"
export default function NotFound(){
    return(
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center font-bold mt-9 text-6xl"> Pagina 404 Não Encontrada</h1>
            <p>Essa Página que tentou acessar não existe!</p>
            <Link href= '/'>
            Voltar para Home
            </Link>
        </div>
    )




}