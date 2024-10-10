import Cartao from "../components/cartao/cartao";
import Base from "./Base"
import ListContainer from "../components/ListContainer/ListContainer";

const dados = [
    {
        titulo: "Um título do Array",
        texto: "Um texto grande do Array."
    },
    {
        titulo: "Outro título do Array",
        texto: "Um outro texto do Array"
    }
]

const SobreNos = () => (
    <Base>
        <ListContainer>
        {
            dados.map( (ele, i) => (
                <Cartao
                    key={i}
                    titulo={ele.titulo}
                    texto={ele.texto} 
                    />
                )
            )
        }
        </ListContainer>
    </Base>
)

export default SobreNos;

