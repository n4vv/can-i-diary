import React, {useRef, useState, useEffect, useContext} from "react"
import axios from "axios"
import { createPlayerSkills } from "../functions"
import { AppContext } from "../context";


export const UserComponent = ({loading, setLoading}) => {
    const { active, actions, playerName } = useContext(AppContext);
    const [query, setQuery] = useState(playerName);
    const inputRef = useRef();

    useEffect(() => {
       if(query){
            // axios.get(`/m=hiscore_oldschool/index_lite.ws?player=${query}`)
            axios.get(`https://pacific-hollows-57675.herokuapp.com/https://secure.runescape.com/m=hiscore_oldschool/index_lite.ws?player=${query}`)
            .then(function(response){                               
                return(createPlayerSkills(response.data))
            })
            .then(function(response){              
                actions.setActive(response, query);                       
            })
            .then(function(){
                actions.setCompleted();
                if (loading) setLoading(false)
            })
            .catch(function(error){
                if (loading) setLoading(false)
            })
       }
       else {
           if(loading) setLoading(false)
       }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [query])    

    const queryPlayer = (e) => {
        e.preventDefault();
        setQuery(inputRef.current.value)
    }

    const clearPlayer = () => {
        setQuery('');
        actions.setInactive()
    }

    if (!loading) {       
        if (active) {
            return(
                <div className="grid-c">
                    <div className="user-component">
                        <label>Display Name: {playerName}</label> <button className="user-button search" onClick={clearPlayer}><div><span>&#8249;</span><span>&#x1F50E;&#xFE0E;</span></div></button>
                    </div>
                </div>
            )
        }
        return (
            <div className="grid-c">
                <div className="user-component">
                    <form>
                        <label htmlFor="user-fetcher">Display Name:</label> <input ref={inputRef} type="text" id="user-fetcher"/>&nbsp;<button onClick={e => queryPlayer(e)}><span>Fetch</span></button>
                    </form>
                </div>
            </div>
        )
    }
    return('')
}