import React from 'react';
import ReactDOM from 'react-dom';
//import Popup from "react-popup";
import Popup from "reactjs-popup";
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

const e = React.createElement;

const CharacterBox = ({ name, picture }) => <div class="characterBox">
    <div class="test"><img src={picture}></img></div>
    {/* <div class="test">hiii</div> */}
    <span>{name}</span>
</div>

// possible Statuses  = BANNED  | PICKED | NEUTRAL( NULL)
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
        default:
        // throw error
    }


    return <Popup
        className="example-warper"
        trigger={
            <button
                class={`borderedBox ${borderColorClass}`}
                value={name}>
                <img src={picture} />
            </button>
        }
        position="right center">
        {close => (
            <div>
                <button className="button" onClick={() => { callBack(name, "TEAM1"); close() }}> Team 1 </button>
                <button className="button" onClick={() => { callBack(name, "TEAM2"); close() }}> Team 2 </button>
                <button className="button" onClick={() => { callBack(name, "BAN"); close() }}> Ban </button>
            </div>)}
    </Popup >
}


class Container extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterList: {
                BanjoKazooie: { name: 'BanjoKazooie', picture: "../resources/characters//BanjoKazooie.png", status: 'NEUTRAL' },
                Bayonetta: { name: 'Bayonetta', picture: "../resources/characters//Bayonetta.png", status: 'NEUTRAL' },
                Bowser: { name: 'Bowser', picture: "../resources/characters//Bowser.png", status: 'NEUTRAL' },
                BowserJr: { name: 'BowserJr', picture: "../resources/characters//BowserJr.png", status: 'NEUTRAL' },
                Byleth: { name: 'Byleth', picture: "../resources/characters//Byleth.png", status: 'NEUTRAL' },
                CaptainFalcon: { name: 'CaptainFalcon', picture: "../resources/characters//CaptainFalcon.png", status: 'NEUTRAL' },
                Chrom: { name: 'Chrom', picture: "../resources/characters//Chrom.png", status: 'NEUTRAL' },
                Cloud: { name: 'Cloud', picture: "../resources/characters//Cloud.png", status: 'NEUTRAL' },
                Corrin: { name: 'Corrin', picture: "../resources/characters//Corrin.png", status: 'NEUTRAL' },
                Daisy: { name: 'Daisy', picture: "../resources/characters//Daisy.png", status: 'NEUTRAL' },
                DarkPit: { name: 'DarkPit', picture: "../resources/characters//DarkPit.png", status: 'NEUTRAL' },
                DarkSamus: { name: 'DarkSamus', picture: "../resources/characters//DarkSamus.png", status: 'NEUTRAL' },
                DiddyKong: { name: 'DiddyKong', picture: "../resources/characters//DiddyKong.png", status: 'NEUTRAL' },
                DonkeyKong: { name: 'DonkeyKong', picture: "../resources/characters//DonkeyKong.png", status: 'NEUTRAL' },
                DrMario: { name: 'DrMario', picture: "../resources/characters//DrMario.png", status: 'NEUTRAL' },
                DuckHunt: { name: 'DuckHunt', picture: "../resources/characters//DuckHunt.png", status: 'NEUTRAL' },
                Falco: { name: 'Falco', picture: "../resources/characters//Falco.png", status: 'NEUTRAL' },
                Fox: { name: 'Fox', picture: "../resources/characters//Fox.png", status: 'NEUTRAL' },
                Ganondorf: { name: 'Ganondorf', picture: "../resources/characters//Ganondorf.png", status: 'NEUTRAL' },
                Greninja: { name: 'Greninja', picture: "../resources/characters//Greninja.png", status: 'NEUTRAL' },
                IceClimbers: { name: 'IceClimbers', picture: "../resources/characters//IceClimbers.png", status: 'NEUTRAL' },
                Ike: { name: 'Ike', picture: "../resources/characters//Ike.png", status: 'NEUTRAL' },
                Incineroar: { name: 'Incineroar', picture: "../resources/characters//Incineroar.png", status: 'NEUTRAL' },
                Inkling: { name: 'Inkling', picture: "../resources/characters//Inkling.png", status: 'NEUTRAL' },
                Isabelle: { name: 'Isabelle', picture: "../resources/characters//Isabelle.png", status: 'NEUTRAL' },
                Jigglypuff: { name: 'Jigglypuff', picture: "../resources/characters//Jigglypuff.png", status: 'NEUTRAL' },
                Joker: { name: 'Joker', picture: "../resources/characters//Joker.png", status: 'NEUTRAL' },
                Ken: { name: 'Ken', picture: "../resources/characters//Ken.png", status: 'NEUTRAL' },
                KingDedede: { name: 'KingDedede', picture: "../resources/characters//KingDedede.png", status: 'NEUTRAL' },
                KingKRool: { name: 'KingKRool', picture: "../resources/characters//KingKRool.png", status: 'NEUTRAL' },
                Kirby: { name: 'Kirby', picture: "../resources/characters//Kirby.png", status: 'NEUTRAL' },
                Link: { name: 'Link', picture: "../resources/characters//Link.png", status: 'NEUTRAL' },
                LittleMac: { name: 'LittleMac', picture: "../resources/characters//LittleMac.png", status: 'NEUTRAL' },
                Lucario: { name: 'Lucario', picture: "../resources/characters//Lucario.png", status: 'NEUTRAL' },
                Lucas: { name: 'Lucas', picture: "../resources/characters//Lucas.png", status: 'NEUTRAL' },
                Lucina: { name: 'Lucina', picture: "../resources/characters//Lucina.png", status: 'NEUTRAL' },
                Luigi: { name: 'Luigi', picture: "../resources/characters//Luigi.png", status: 'NEUTRAL' },
                Luminary: { name: 'Luminary', picture: "../resources/characters//Luminary.png", status: 'NEUTRAL' },
                Man: { name: 'Man', picture: "../resources/characters//Man.png", status: 'NEUTRAL' },
                Mario: { name: 'Mario', picture: "../resources/characters//Mario.png", status: 'NEUTRAL' },
                Marth: { name: 'Marth', picture: "../resources/characters//Marth.png", status: 'NEUTRAL' },
                MegaMan: { name: 'MegaMan', picture: "../resources/characters//MegaMan.png", status: 'NEUTRAL' },
                MetaKnight: { name: 'MetaKnight', picture: "../resources/characters//MetaKnight.png", status: 'NEUTRAL' },
                Mewtwo: { name: 'Mewtwo', picture: "../resources/characters//Mewtwo.png", status: 'NEUTRAL' },
                MiiBrawler: { name: 'MiiBrawler', picture: "../resources/characters//MiiBrawler.png", status: 'NEUTRAL' },
                MiiGunner: { name: 'MiiGunner', picture: "../resources/characters//MiiGunner.png", status: 'NEUTRAL' },
                MiiSwordfighter: { name: 'MiiSwordfighter', picture: "../resources/characters//MiiSwordfighter.png", status: 'NEUTRAL' },
                MinMin: { name: 'MinMin', picture: "../resources/characters//MinMin.png", status: 'NEUTRAL' },
                MrGameWatch: { name: 'MrGameWatch', picture: "../resources/characters//MrGameWatch.png", status: 'NEUTRAL' },
                Ness: { name: 'Ness', picture: "../resources/characters//Ness.png", status: 'NEUTRAL' },
                Olimar: { name: 'Olimar', picture: "../resources/characters//Olimar.png", status: 'NEUTRAL' },
                Palutena: { name: 'Palutena', picture: "../resources/characters//Palutena.png", status: 'NEUTRAL' },
                Peach: { name: 'Peach', picture: "../resources/characters//Peach.png", status: 'NEUTRAL' },
                Pichu: { name: 'Pichu', picture: "../resources/characters//Pichu.png", status: 'NEUTRAL' },
                Pikachu: { name: 'Pikachu', picture: "../resources/characters//Pikachu.png", status: 'NEUTRAL' },
                PiranhaPlant: { name: 'PiranhaPlant', picture: "../resources/characters//PiranhaPlant.png", status: 'NEUTRAL' },
                Pit: { name: 'Pit', picture: "../resources/characters//Pit.png", status: 'NEUTRAL' },
                PokemonTrainer: { name: 'PokemonTrainer', picture: "../resources/characters//PokemonTrainer.png", status: 'NEUTRAL' },
                RichterBelmont: { name: 'RichterBelmont', picture: "../resources/characters//RichterBelmont.png", status: 'NEUTRAL' },
                Ridley: { name: 'Ridley', picture: "../resources/characters//Ridley.png", status: 'NEUTRAL' },
                ROB: { name: 'ROB', picture: "../resources/characters//ROB.png", status: 'NEUTRAL' },
                Robin: { name: 'Robin', picture: "../resources/characters//Robin.png", status: 'NEUTRAL' },
                RosalinaLuma: { name: 'RosalinaLuma', picture: "../resources/characters//RosalinaLuma.png", status: 'NEUTRAL' },
                Roy: { name: 'Roy', picture: "../resources/characters//Roy.png", status: 'NEUTRAL' },
                Ryu: { name: 'Ryu', picture: "../resources/characters//Ryu.png", status: 'NEUTRAL' },
                Samus: { name: 'Samus', picture: "../resources/characters//Samus.png", status: 'NEUTRAL' },
                Sheik: { name: 'Sheik', picture: "../resources/characters//Sheik.png", status: 'NEUTRAL' },
                Shulk: { name: 'Shulk', picture: "../resources/characters//Shulk.png", status: 'NEUTRAL' },
                SimonBelmont: { name: 'SimonBelmont', picture: "../resources/characters//SimonBelmont.png", status: 'NEUTRAL' },
                Snake: { name: 'Snake', picture: "../resources/characters//Snake.png", status: 'NEUTRAL' },
                Sonic: { name: 'Sonic', picture: "../resources/characters//Sonic.png", status: 'NEUTRAL' },
                Terry: { name: 'Terry', picture: "../resources/characters//Terry.png", status: 'NEUTRAL' },
                ToonLink: { name: 'ToonLink', picture: "../resources/characters//ToonLink.png", status: 'NEUTRAL' },
                Villager: { name: 'Villager', picture: "../resources/characters//Villager.png", status: 'NEUTRAL' },
                Wario: { name: 'Wario', picture: "../resources/characters//Wario.png", status: 'NEUTRAL' },
                WiiFitTrainer: { name: 'WiiFitTrainer', picture: "../resources/characters//WiiFitTrainer.png", status: 'NEUTRAL' },
                Wolf: { name: 'Wolf', picture: "../resources/characters//Wolf.png", status: 'NEUTRAL' },
                Yoshi: { name: 'Yoshi', picture: "../resources/characters//Yoshi.png", status: 'NEUTRAL' },
                YoungLink: { name: 'YoungLink', picture: "../resources/characters//YoungLink.png", status: 'NEUTRAL' },
                Zelda: { name: 'Zelda', picture: "../resources/characters//Zelda.png", status: 'NEUTRAL' },
                ZeroSuitSamus: { name: 'ZeroSuitSamus', picture: "../resources/characters//ZeroSuitSamus.png", status: 'NEUTRAL' }
            },

            popupShown: false
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

    render() {
        return <div style={{ display: "flex" }}>

            <div class="characterContainerBanContainer">
                <div id="ban-area" class="characterContainerBan ">
                    <div class="section-header">BAN</div>
                    {
                        Object.values(this.state.characterList)
                            .filter(character => character.status === "BAN" && character.currentRound)
                            .map(character => <CharacterBox name={character.name} picture={character.picture} ></CharacterBox>)

                    }
                </div>
            </div>



            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
                <div class="characterContainer">

                    {
                        Object.values(this.state.characterList).map(character => <BorderedCharacterBox name={character.name} picture={character.picture} status={character.status}
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
                            .map(character => <CharacterBox name={character.name} picture={character.picture} ></CharacterBox>)

                    }
                </div>


                <div id="team2-area" stle={{}} class="characterContainerTeam2">
                    <div class="section-header">TEAM 2</div>
                    {
                        Object.values(this.state.characterList)
                            .filter(character => character.status === "TEAM2" && character.currentRound)
                            .map(character => <CharacterBox name={character.name} picture={character.picture} ></CharacterBox>)

                    }
                </div>
            </div>
        </div >

    }
}



const domContainer = document.querySelector('#div_container');
ReactDOM.render(e(Container), domContainer);