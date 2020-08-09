// import libraries for code
import React from 'react';
import ReactDOM from 'react-dom';
import Popup from "reactjs-popup";
// import images for webpack
import * as Imgs from './imgImports.js'
// import css stylesheets
import './css/styles.css'
import './css/popup.css'

const e = React.createElement;

const CharacterBox = ({ name, picture, callBack }) =>
    <Popup
        trigger={
            <div class="characterBox">
                <button
                    value={name}
                    class="characterPortrait">
                    <img src={picture} />
                </button>
                <span>{name}</span>
            </div>
        }
        keepTooltipInside>
        {close => (
            <button class="button" onClick={() => { callBack(name, "NEUTRAL"); close() }}> Remove </button>
        )}
    </Popup >

const BorderedCharacterBox = ({ name, picture, status, callBack }) => {
    let borderColorClass = "";

    switch (status) {
        case 'BAN':
            borderColorClass = "banBorder"
            break;
        case 'TEAM1':
            borderColorClass = "t1Border"
            break;
        case 'TEAM2':
            borderColorClass = "t2Border"
            break;
        case 'NEUTRAL':
            break;
    }

    return <Popup
        class="example-warper"
        trigger={
            <button
                class={`borderedBox ${borderColorClass}`}
                value={name}>
                <img src={picture} />
            </button>
        }
        keepTooltipInside>
        {close => (
            <div>
                <button class="button" onClick={() => { callBack(name, "TEAM1"); close() }}> Team 1 </button>
                <button class="button" onClick={() => { callBack(name, "TEAM2"); close() }}> Team 2 </button>
                <button class="button" onClick={() => { callBack(name, "BAN"); close() }}> Ban </button>
            </div>)}
    </Popup >
}


class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterList: {
                BanjoKazooie: { name: 'BanjoKazooie', picture: Imgs.BanjoKazooie, status: 'NEUTRAL' },
                Bayonetta: { name: 'Bayonetta', picture: Imgs.Bayonetta, status: 'NEUTRAL' },
                Bowser: { name: 'Bowser', picture: Imgs.Bowser, status: 'NEUTRAL' },
                BowserJr: { name: 'BowserJr', picture: Imgs.BowserJr, status: 'NEUTRAL' },
                Byleth: { name: 'Byleth', picture: Imgs.Byleth, status: 'NEUTRAL' },
                CaptainFalcon: { name: 'CaptainFalcon', picture: Imgs.CaptainFalcon, status: 'NEUTRAL' },
                Chrom: { name: 'Chrom', picture: Imgs.Chrom, status: 'NEUTRAL' },
                Cloud: { name: 'Cloud', picture: Imgs.Cloud, status: 'NEUTRAL' },
                Corrin: { name: 'Corrin', picture: Imgs.Corrin, status: 'NEUTRAL' },
                Daisy: { name: 'Daisy', picture: Imgs.Daisy, status: 'NEUTRAL' },
                DarkPit: { name: 'DarkPit', picture: Imgs.DarkPit, status: 'NEUTRAL' },
                DarkSamus: { name: 'DarkSamus', picture: Imgs.DarkSamus, status: 'NEUTRAL' },
                DiddyKong: { name: 'DiddyKong', picture: Imgs.DiddyKong, status: 'NEUTRAL' },
                DonkeyKong: { name: 'DonkeyKong', picture: Imgs.DonkeyKong, status: 'NEUTRAL' },
                DrMario: { name: 'DrMario', picture: Imgs.DrMario, status: 'NEUTRAL' },
                DuckHunt: { name: 'DuckHunt', picture: Imgs.DuckHunt, status: 'NEUTRAL' },
                Falco: { name: 'Falco', picture: Imgs.Falco, status: 'NEUTRAL' },
                Fox: { name: 'Fox', picture: Imgs.Fox, status: 'NEUTRAL' },
                Ganondorf: { name: 'Ganondorf', picture: Imgs.Ganondorf, status: 'NEUTRAL' },
                Greninja: { name: 'Greninja', picture: Imgs.Greninja, status: 'NEUTRAL' },
                IceClimbers: { name: 'IceClimbers', picture: Imgs.IceClimbers, status: 'NEUTRAL' },
                Ike: { name: 'Ike', picture: Imgs.Ike, status: 'NEUTRAL' },
                Incineroar: { name: 'Incineroar', picture: Imgs.Incineroar, status: 'NEUTRAL' },
                Inkling: { name: 'Inkling', picture: Imgs.Inkling, status: 'NEUTRAL' },
                Isabelle: { name: 'Isabelle', picture: Imgs.Isabelle, status: 'NEUTRAL' },
                Jigglypuff: { name: 'Jigglypuff', picture: Imgs.Jigglypuff, status: 'NEUTRAL' },
                Joker: { name: 'Joker', picture: Imgs.Joker, status: 'NEUTRAL' },
                Ken: { name: 'Ken', picture: Imgs.Ken, status: 'NEUTRAL' },
                KingDedede: { name: 'KingDedede', picture: Imgs.KingDedede, status: 'NEUTRAL' },
                KingKRool: { name: 'KingKRool', picture: Imgs.KingKRool, status: 'NEUTRAL' },
                Kirby: { name: 'Kirby', picture: Imgs.Kirby, status: 'NEUTRAL' },
                Link: { name: 'Link', picture: Imgs.Link, status: 'NEUTRAL' },
                LittleMac: { name: 'LittleMac', picture: Imgs.LittleMac, status: 'NEUTRAL' },
                Lucario: { name: 'Lucario', picture: Imgs.Lucario, status: 'NEUTRAL' },
                Lucas: { name: 'Lucas', picture: Imgs.Lucas, status: 'NEUTRAL' },
                Lucina: { name: 'Lucina', picture: Imgs.Lucina, status: 'NEUTRAL' },
                Luigi: { name: 'Luigi', picture: Imgs.Luigi, status: 'NEUTRAL' },
                Luminary: { name: 'Luminary', picture: Imgs.Luminary, status: 'NEUTRAL' },
                Man: { name: 'Man', picture: Imgs.Man, status: 'NEUTRAL' },
                Mario: { name: 'Mario', picture: Imgs.Mario, status: 'NEUTRAL' },
                Marth: { name: 'Marth', picture: Imgs.Marth, status: 'NEUTRAL' },
                MegaMan: { name: 'MegaMan', picture: Imgs.MegaMan, status: 'NEUTRAL' },
                MetaKnight: { name: 'MetaKnight', picture: Imgs.MetaKnight, status: 'NEUTRAL' },
                Mewtwo: { name: 'Mewtwo', picture: Imgs.Mewtwo, status: 'NEUTRAL' },
                MiiBrawler: { name: 'MiiBrawler', picture: Imgs.MiiBrawler, status: 'NEUTRAL' },
                MiiGunner: { name: 'MiiGunner', picture: Imgs.MiiGunner, status: 'NEUTRAL' },
                MiiSwordfighter: { name: 'MiiSwordfighter', picture: Imgs.MiiSwordfighter, status: 'NEUTRAL' },
                MinMin: { name: 'MinMin', picture: Imgs.MinMin, status: 'NEUTRAL' },
                MrGameWatch: { name: 'MrGameWatch', picture: Imgs.MrGameWatch, status: 'NEUTRAL' },
                Ness: { name: 'Ness', picture: Imgs.Ness, status: 'NEUTRAL' },
                Olimar: { name: 'Olimar', picture: Imgs.Olimar, status: 'NEUTRAL' },
                Palutena: { name: 'Palutena', picture: Imgs.Palutena, status: 'NEUTRAL' },
                Peach: { name: 'Peach', picture: Imgs.Peach, status: 'NEUTRAL' },
                Pichu: { name: 'Pichu', picture: Imgs.Pichu, status: 'NEUTRAL' },
                Pikachu: { name: 'Pikachu', picture: Imgs.Pikachu, status: 'NEUTRAL' },
                PiranhaPlant: { name: 'PiranhaPlant', picture: Imgs.PiranhaPlant, status: 'NEUTRAL' },
                Pit: { name: 'Pit', picture: Imgs.Pit, status: 'NEUTRAL' },
                PokemonTrainer: { name: 'PokemonTrainer', picture: Imgs.PokemonTrainer, status: 'NEUTRAL' },
                RichterBelmont: { name: 'RichterBelmont', picture: Imgs.RichterBelmont, status: 'NEUTRAL' },
                Ridley: { name: 'Ridley', picture: Imgs.Ridley, status: 'NEUTRAL' },
                ROB: { name: 'ROB', picture: Imgs.ROB, status: 'NEUTRAL' },
                Robin: { name: 'Robin', picture: Imgs.Robin, status: 'NEUTRAL' },
                RosalinaLuma: { name: 'RosalinaLuma', picture: Imgs.RosalinaLuma, status: 'NEUTRAL' },
                Roy: { name: 'Roy', picture: Imgs.Roy, status: 'NEUTRAL' },
                Ryu: { name: 'Ryu', picture: Imgs.Ryu, status: 'NEUTRAL' },
                Samus: { name: 'Samus', picture: Imgs.Samus, status: 'NEUTRAL' },
                Sheik: { name: 'Sheik', picture: Imgs.Sheik, status: 'NEUTRAL' },
                Shulk: { name: 'Shulk', picture: Imgs.Shulk, status: 'NEUTRAL' },
                SimonBelmont: { name: 'SimonBelmont', picture: Imgs.SimonBelmont, status: 'NEUTRAL' },
                Snake: { name: 'Snake', picture: Imgs.Snake, status: 'NEUTRAL' },
                Sonic: { name: 'Sonic', picture: Imgs.Sonic, status: 'NEUTRAL' },
                Terry: { name: 'Terry', picture: Imgs.Terry, status: 'NEUTRAL' },
                ToonLink: { name: 'ToonLink', picture: Imgs.ToonLink, status: 'NEUTRAL' },
                Villager: { name: 'Villager', picture: Imgs.Villager, status: 'NEUTRAL' },
                Wario: { name: 'Wario', picture: Imgs.Wario, status: 'NEUTRAL' },
                WiiFitTrainer: { name: 'WiiFitTrainer', picture: Imgs.WiiFitTrainer, status: 'NEUTRAL' },
                Wolf: { name: 'Wolf', picture: Imgs.Wolf, status: 'NEUTRAL' },
                Yoshi: { name: 'Yoshi', picture: Imgs.Yoshi, status: 'NEUTRAL' },
                YoungLink: { name: 'YoungLink', picture: Imgs.YoungLink, status: 'NEUTRAL' },
                Zelda: { name: 'Zelda', picture: Imgs.Zelda, status: 'NEUTRAL' },
                ZeroSuitSamus: { name: 'ZeroSuitSamus', picture: Imgs.ZeroSuitSamus, status: 'NEUTRAL' },
            },
            searchText: ""
        };
    }



    changeStatus = (name, status) => {
        let copy;

        // do a deep copy, spread operator wasn't working
        copy = {}
        Object.assign(copy, this.state.characterList)

        copy[name].status = status
        copy[name].currentRound = true

        this.setState({
            ...this.state,
            characterList: { ...copy }
        })

    };

    clearAll = () => {
        let copy = {}
        Object.assign(copy, this.state.characterList)

        Object.keys(copy).map(function (key, index) {
            copy[key].status = "NEUTRAL"
            copy[key].currentRound = false
        });

        this.setState({
            ...this.state,
            characterList: { ...copy }
        })
    }

    clearBans = () => {
        let copy = {}
        Object.assign(copy, this.state.characterList)

        Object.keys(copy).map(function (key, index) {
            if (copy[key].status === "BAN") {
                copy[key].currentRound = false
            }
        });

        this.setState({
            ...this.state,
            characterList: { ...copy }
        })
    }

    clearTeams = () => {
        let copy = {}

        Object.assign(copy, this.state.characterList)

        Object.keys(copy).map(function (key, index) {
            if (copy[key].status === "TEAM1" || copy[key].status === "TEAM2") {
                copy[key].currentRound = false
            }

        });


        this.setState({
            ...this.state,
            characterList: { ...copy }
        })
    }

    newRound = () => {
        let copy = {}

        Object.assign(copy, this.state.characterList)

        Object.keys(copy).map(function (key, index) {
            if (copy[key].status === "TEAM1" || copy[key].status === "TEAM2") {
                copy[key].status = "NEUTRAL"
            }
            copy[key].currentRound = false
        });

        this.setState({
            ...this.state,
            characterList: { ...copy }
        })
    }

    getSearchtext = () => {
        return this.state.searchText;
    }

    onSearchChange = ({ target: { value } }) => {
        this.setState({
            ...this.state,
            searchText: value
        })
    }


    render() {
        return <div style={{ display: "flex" }}>

            <div class="characterContainerBanContainer">
                <div id="ban-area" class="characterContainerBan ">
                    <div class="section-header">BAN</div>
                    {
                        Object.values(this.state.characterList)
                            .filter(character => character.status === "BAN" && character.currentRound)
                            .map(character => <CharacterBox name={character.name} picture={character.picture} callBack={this.changeStatus} ></CharacterBox>)

                    }
                </div>
            </div>


            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>

                <div class="headerButtons">
                    <button class="headerButton" onClick={this.clearAll}>
                        Clear All
                </button>
                    <button class="headerButton" onClick={this.clearBans}>
                        Clear Bans
                </button>
                    <button class="headerButton" onClick={this.clearTeams}>
                        Clear Teams
                </button>
                    <button class="headerButton" onClick={this.newRound}>
                        New Round
                </button>
                </div>
                <div className="search-container">
                    <label id="txtCharSearch">Search </label>
                    <input
                        type="text"
                        onChange={e => this.onSearchChange(e)}
                    />
                </div>


                <div class="characterContainer">

                    {
                        Object.values(this.state.characterList)
                            .filter(character => {
                                let searchValue = RegExp(".*" + this.getSearchtext().toLocaleLowerCase() + ".*")
                                return searchValue.test(character.name.toLocaleLowerCase())
                            })
                            .map(character => <BorderedCharacterBox name={character.name} picture={character.picture} status={character.status}
                                callBack={this.changeStatus} ></BorderedCharacterBox>)
                    }
                </div>
            </div>


            <div class="pickArea">
                <div id="team1-area" class="characterContainerTeam1">
                    <div class="section-header">TEAM 1</div>
                    {
                        Object.values(this.state.characterList)
                            .filter(character => character.status === "TEAM1" && character.currentRound)
                            .map(character => <CharacterBox name={character.name} picture={character.picture} callBack={this.changeStatus} ></CharacterBox>)

                    }
                </div>


                <div id="team2-area" stle={{}} class="characterContainerTeam2">
                    <div class="section-header">TEAM 2</div>
                    {
                        Object.values(this.state.characterList)
                            .filter(character => character.status === "TEAM2" && character.currentRound)
                            .map(character => <CharacterBox name={character.name} picture={character.picture} callBack={this.changeStatus} ></CharacterBox>)

                    }
                </div>
            </div>
        </div >

    }
}



const domContainer = document.querySelector('#div_container');
ReactDOM.render(e(Container), domContainer);