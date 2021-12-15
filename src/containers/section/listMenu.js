import React, { useEffect } from "react";
import Perfil from "../../components/perfil";
import ico from "../../images/search.png";
import api from "../../service/api";

const ListAut = () => {
    const [pesquisa, setPesquisa] = React.useState('');
    const [filmes, setFilmes] = React.useState([]);

    useEffect(() =>{
        async function getAPI(){
            const response = await api.get('');
    
            setFilmes(response.data.hits);
        }
        getAPI()
    }, []);


    async function searchAutor(){
        const response = await api.get('');
        setFilmes(response.data.hits.filter(b=> b.author.toLowerCase().includes(pesquisa.toLowerCase())))
    }

    const verCampo = (campo) => {
        if(campo === null) {
            return "Não encontrado";
        } else {
            return campo;
        }
    }
    
    return (
        <>
            <div>
                <input id= "searchBar" type= "text" placeholder= "Autor" onChange= {(e)=> setPesquisa(e.target.value)}></input> 
                <img src= {ico} className= "searchButton" alt= "logo" onClick= {searchAutor}/>
            </div>
            {filmes.map(filmes=> (
                <li className= "Perfil" key={filmes.objectID}>
                    <Perfil autor= {filmes.author} tittle= {verCampo(filmes.title)} url= {verCampo(filmes.url)}/>
                </li>
            ))}
        </>
    );
}

export default ListAut;