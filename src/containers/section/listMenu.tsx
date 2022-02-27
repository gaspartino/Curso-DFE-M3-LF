import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Perfil from "../../components/perfil";
import ico from "../../images/search.png";
import api from "../../service/api";
import { SearchState } from "./redux/searchReducer"

const ListAut = () => {
    const dispatch = useDispatch();
    const pesquisa = useSelector<SearchState, string>(state => state.search);
    const data = useSelector<SearchState, any[]>(state => state.data);

    useEffect(() =>{
        async function getAPI(){
            const response = await api.get('');
    
            setData(response.data.hits);
        }
        getAPI()
    }, []);

    async function searchAutor(){
        const response = await api.get('');
        console.log(response.data.hits[5].title.toLowerCase());
        setData(response.data.hits.filter((b : any )=> {
            if(b.title === null) {
                return b.author.toLowerCase().includes(pesquisa.toLowerCase());
            }else {
                return (b.author.toLowerCase().includes(pesquisa.toLowerCase()) || b.title.toLowerCase().includes(pesquisa.toLowerCase()))
            }
        }));    
    }

    const verCampo = (campo : string) => {
        if(campo === null) {
            return "Não encontrado";
        } else {
            return campo;
        }
    }
    
    const setSearch = (search:string) => {
        console.log(search);
        dispatch({type: "SEARCH_CHANGE", payload: search})
        console.log(search);
    }

    const setData = (data:any[]) => {
        dispatch({type: "DATA_CHANGE", payload: data})
    }

    return (
        <>
            <div>
                <input id= "searchBar" type= "text" placeholder= "Autor" onChange= {(e)=> setSearch(e.target.value)}></input> 
                <img src= {ico} className= "searchButton" alt= "logo" onClick= {searchAutor}/>
            </div>
            {data.map(data=> (
                <li className= "Perfil" key={data.objectID}>
                    <Perfil autor= {data.author} tittle= {verCampo(data.title)} url= {verCampo(data.url)}/>
                </li>
            ))}
        </>
    );
}

export default ListAut;