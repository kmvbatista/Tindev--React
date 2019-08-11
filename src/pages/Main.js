import React, {useEffect, useState} from 'react';

import logo  from '../assets/logo.svg'

import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

import api from '../services/api'

import './Main.css'




export default function Main({match}) {

    const [users, setUsers]= useState([]);
    useEffect( () => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {user : match.params.id}
            });
            console.log(response.data);
        }
        loadUsers();

        setUsers(response.data);


    } , [match.params.id]);
    return (
        <div className="main-container">
            <img src={logo} alt="tindev"></img>
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" ></img>
                    <footer>
                        <strong>Filipe Deschamps</strong> 
                        <p>A nice guy</p>
                    </footer>
                    
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"></img>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"></img>
                        </button>

                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" ></img>
                    <footer>
                        <strong>Filipe Deschamps</strong> 
                        <p>A nice guy</p>
                    </footer>
                    
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"></img>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"></img>
                        </button>

                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" ></img>
                    <footer>
                        <strong>Filipe Deschamps</strong> 
                        <p>A nice guy</p>
                    </footer>
                    
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"></img>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"></img>
                        </button>

                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" ></img>
                    <footer>
                        <strong>Filipe Deschamps</strong> 
                        <p>A nice guy</p>
                    </footer>
                    
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"></img>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"></img>
                        </button>

                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" ></img>
                    <footer>
                        <strong>Filipe Deschamps</strong> 
                        <p>A nice guy</p>
                    </footer>
                    
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"></img>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"></img>
                        </button>

                    </div>
                </li>

                <li>
                    <img src="https://avatars2.githubusercontent.com/u/2254731?v=4" alt="" ></img>
                    <footer>
                        <strong>Filipe Deschamps</strong> 
                        <p>A nice guy</p>
                    </footer>
                    
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="Dislike"></img>
                        </button>

                        <button type="button">
                            <img src={like} alt="Like"></img>
                        </button>

                    </div>
                </li>

                
            </ul>

        </div>
    )
} 