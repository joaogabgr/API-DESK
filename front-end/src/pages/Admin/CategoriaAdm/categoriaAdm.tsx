import { Header } from '../../../components/Header';
import './categoriaAdm.css';
import { AsideAdmin } from '../../../components/AsideAdmin';

export const CategoriaAdm = () => {
    return (
        <div>
            <Header />
            <div className="titulo">
                <div className="texto_titulo">
                    <h3>Configurações de cadastro categoria de ticket</h3>
                </div>
            </div>

            <div className="container">
                <AsideAdmin/>
                <div className="box_de_conteudo">
                    <h4>teste</h4>
                    <h4>teste</h4>
                    <h4>teste</h4>
                    
                </div>
            </div>
        </div>
    )};
