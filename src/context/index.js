import React, { createContext, Component } from 'react';
import { resetCompleted } from "../functions"
import { diaries } from '../data';

export const AppContext = createContext();

function filterDiaries(playerSkills) {
    let newdiaries = diaries.map((diary) => ({
        ...diary,
        tiers: diary.tiers.map((tier)=> ({
            ...tier,
            reqs: tier.reqs.filter(req => playerSkills[req.skillId].level < req.level)
        }))
    }));
    return newdiaries
}

export class Provider extends Component {
    state = {
       active: false,
       edit: false,
       completed: resetCompleted(),
       playerName: JSON.parse(localStorage.getItem("username")),
       playerSkills: null,
       diaries
    };
   
    setActive = (playerSkills, playerName) => {     
        let newdiaries = filterDiaries(playerSkills);    
        localStorage.setItem("username", JSON.stringify(playerName));               
        this.setState({
            active: true,
            playerSkills,
            playerName,
            diaries: newdiaries,
        })
    }

    setCompleted = () => {
        let fetchCompleted = JSON.parse(localStorage.getItem(this.state.playerName+"_completed"));
        this.setState({
            completed: fetchCompleted || resetCompleted(),
        })
    }

    setInactive = () => {
        localStorage.removeItem("username")
        this.setState({
            active: false,
            edit: false,
            playerName: null,
            playerSkills: null,
            diaries,
            completed: resetCompleted(),
        })
    }

    resetCompletedView = () => {
        localStorage.removeItem(this.state.playerName+"_completed")
        this.setState({           
            completed: resetCompleted(),
        })
    }

    toggleEdit = () => {       
        this.setState({
            edit: !this.state.edit
        })
    }

    handleCompletedChange = (p, t) => {
        let newCompleted = [...this.state.completed]
        newCompleted[p][t]=!newCompleted[p][t]
        this.setState({
            completed: [...newCompleted]
        })
        localStorage.setItem(this.state.playerName+"_completed", JSON.stringify(this.state.completed));
    }

    render() {
        return (
            <AppContext.Provider value={{
                active: this.state.active,  
                edit: this.state.edit, 
                completed: this.state.completed,
                playerSkills: this.state.playerSkills,    
                diaries: this.state.diaries, 
                playerName: this.state.playerName,   
                actions: {
                    setActive: this.setActive,
                    setInactive: this.setInactive,
                    setCompleted: this.setCompleted,
                    toggleEdit: this.toggleEdit,
                    handleCompletedChange: this.handleCompletedChange,
                    resetCompletedView: this.resetCompletedView,
                }
            }}>
                { this.props.children }
            </AppContext.Provider>
        );
    }
}