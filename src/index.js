// import libraries for code
import React from 'react';
import ReactDOM from 'react-dom';
import Popup from "reactjs-popup";
// import images for webpack
import BanjoKazooie from "../resources/characters/BanjoKazooie.png";
import Bayonetta from "../resources/characters/Bayonetta.png";
import Bowser from "../resources/characters/Bowser.png";
import BowserJr from "../resources/characters/BowserJr.png";
import Byleth from "../resources/characters/Byleth.png";
import CaptainFalcon from "../resources/characters/CaptainFalcon.png";
import Chrom from "../resources/characters/Chrom.png";
import Cloud from "../resources/characters/Cloud.png";
import Corrin from "../resources/characters/Corrin.png";
import Daisy from "../resources/characters/Daisy.png";
import DarkPit from "../resources/characters/DarkPit.png";
import DarkSamus from "../resources/characters/DarkSamus.png";
import DiddyKong from "../resources/characters/DiddyKong.png";
import DonkeyKong from "../resources/characters/DonkeyKong.png";
import DrMario from "../resources/characters/DrMario.png";
import DuckHunt from "../resources/characters/DuckHunt.png";
import Falco from "../resources/characters/Falco.png";
import Fox from "../resources/characters/Fox.png";
import Ganondorf from "../resources/characters/Ganondorf.png";
import Greninja from "../resources/characters/Greninja.png";
import IceClimbers from "../resources/characters/IceClimbers.png";
import Ike from "../resources/characters/Ike.png";
import Incineroar from "../resources/characters/Incineroar.png";
import Inkling from "../resources/characters/Inkling.png";
import Isabelle from "../resources/characters/Isabelle.png";
import Jigglypuff from "../resources/characters/Jigglypuff.png";
import Joker from "../resources/characters/Joker.png";
import Ken from "../resources/characters/Ken.png";
import KingDedede from "../resources/characters/KingDedede.png";
import KingKRool from "../resources/characters/KingKRool.png";
import Kirby from "../resources/characters/Kirby.png";
import Link from "../resources/characters/Link.png";
import LittleMac from "../resources/characters/LittleMac.png";
import Lucario from "../resources/characters/Lucario.png";
import Lucas from "../resources/characters/Lucas.png";
import Lucina from "../resources/characters/Lucina.png";
import Luigi from "../resources/characters/Luigi.png";
import Luminary from "../resources/characters/Luminary.png";
import Man from "../resources/characters/Man.png";
import Mario from "../resources/characters/Mario.png";
import Marth from "../resources/characters/Marth.png";
import MegaMan from "../resources/characters/MegaMan.png";
import MetaKnight from "../resources/characters/MetaKnight.png";
import Mewtwo from "../resources/characters/Mewtwo.png";
import MiiBrawler from "../resources/characters/MiiBrawler.png";
import MiiGunner from "../resources/characters/MiiGunner.png";
import MiiSwordfighter from "../resources/characters/MiiSwordfighter.png";
import MinMin from "../resources/characters/MinMin.png";
import MrGameWatch from "../resources/characters/MrGameWatch.png";
import Ness from "../resources/characters/Ness.png";
import Olimar from "../resources/characters/Olimar.png";
import Palutena from "../resources/characters/Palutena.png";
import Peach from "../resources/characters/Peach.png";
import Pichu from "../resources/characters/Pichu.png";
import Pikachu from "../resources/characters/Pikachu.png";
import PiranhaPlant from "../resources/characters/PiranhaPlant.png";
import Pit from "../resources/characters/Pit.png";
import PokemonTrainer from "../resources/characters/PokemonTrainer.png";
import RichterBelmont from "../resources/characters/RichterBelmont.png";
import Ridley from "../resources/characters/Ridley.png";
import ROB from "../resources/characters/ROB.png";
import Robin from "../resources/characters/Robin.png";
import RosalinaLuma from "../resources/characters/RosalinaLuma.png";
import Roy from "../resources/characters/Roy.png";
import Ryu from "../resources/characters/Ryu.png";
import Samus from "../resources/characters/Samus.png";
import Sheik from "../resources/characters/Sheik.png";
import Shulk from "../resources/characters/Shulk.png";
import SimonBelmont from "../resources/characters/SimonBelmont.png";
import Snake from "../resources/characters/Snake.png";
import Sonic from "../resources/characters/Sonic.png";
import Terry from "../resources/characters/Terry.png";
import ToonLink from "../resources/characters/ToonLink.png";
import Villager from "../resources/characters/Villager.png";
import Wario from "../resources/characters/Wario.png";
import WiiFitTrainer from "../resources/characters/WiiFitTrainer.png";
import Wolf from "../resources/characters/Wolf.png";
import Yoshi from "../resources/characters/Yoshi.png";
import YoungLink from "../resources/characters/YoungLink.png";
import Zelda from "../resources/characters/Zelda.png";
import ZeroSuitSamus from "../resources/characters/ZeroSuitSamus.png";
// import css stylesheets
import './css/styles.css'
import './css/popup.css'

const e = React.createElement;

const CharacterBox = ({ name, picture }) => <div class="characterBox">
    <div class="characterPortrait"><img src={picture}></img></div>
    <span>{name}</span>
</div>

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
                BanjoKazooie: { name: 'BanjoKazooie', picture: BanjoKazooie, status: 'NEUTRAL' },
                Bayonetta: { name: 'Bayonetta', picture: Bayonetta, status: 'NEUTRAL' },
                Bowser: { name: 'Bowser', picture: Bowser, status: 'NEUTRAL' },
                BowserJr: { name: 'BowserJr', picture: BowserJr, status: 'NEUTRAL' },
                Byleth: { name: 'Byleth', picture: Byleth, status: 'NEUTRAL' },
                CaptainFalcon: { name: 'CaptainFalcon', picture: CaptainFalcon, status: 'NEUTRAL' },
                Chrom: { name: 'Chrom', picture: Chrom, status: 'NEUTRAL' },
                Cloud: { name: 'Cloud', picture: Cloud, status: 'NEUTRAL' },
                Corrin: { name: 'Corrin', picture: Corrin, status: 'NEUTRAL' },
                Daisy: { name: 'Daisy', picture: Daisy, status: 'NEUTRAL' },
                DarkPit: { name: 'DarkPit', picture: DarkPit, status: 'NEUTRAL' },
                DarkSamus: { name: 'DarkSamus', picture: DarkSamus, status: 'NEUTRAL' },
                DiddyKong: { name: 'DiddyKong', picture: DiddyKong, status: 'NEUTRAL' },
                DonkeyKong: { name: 'DonkeyKong', picture: DonkeyKong, status: 'NEUTRAL' },
                DrMario: { name: 'DrMario', picture: DrMario, status: 'NEUTRAL' },
                DuckHunt: { name: 'DuckHunt', picture: DuckHunt, status: 'NEUTRAL' },
                Falco: { name: 'Falco', picture: Falco, status: 'NEUTRAL' },
                Fox: { name: 'Fox', picture: Fox, status: 'NEUTRAL' },
                Ganondorf: { name: 'Ganondorf', picture: Ganondorf, status: 'NEUTRAL' },
                Greninja: { name: 'Greninja', picture: Greninja, status: 'NEUTRAL' },
                IceClimbers: { name: 'IceClimbers', picture: IceClimbers, status: 'NEUTRAL' },
                Ike: { name: 'Ike', picture: Ike, status: 'NEUTRAL' },
                Incineroar: { name: 'Incineroar', picture: Incineroar, status: 'NEUTRAL' },
                Inkling: { name: 'Inkling', picture: Inkling, status: 'NEUTRAL' },
                Isabelle: { name: 'Isabelle', picture: Isabelle, status: 'NEUTRAL' },
                Jigglypuff: { name: 'Jigglypuff', picture: Jigglypuff, status: 'NEUTRAL' },
                Joker: { name: 'Joker', picture: Joker, status: 'NEUTRAL' },
                Ken: { name: 'Ken', picture: Ken, status: 'NEUTRAL' },
                KingDedede: { name: 'KingDedede', picture: KingDedede, status: 'NEUTRAL' },
                KingKRool: { name: 'KingKRool', picture: KingKRool, status: 'NEUTRAL' },
                Kirby: { name: 'Kirby', picture: Kirby, status: 'NEUTRAL' },
                Link: { name: 'Link', picture: Link, status: 'NEUTRAL' },
                LittleMac: { name: 'LittleMac', picture: LittleMac, status: 'NEUTRAL' },
                Lucario: { name: 'Lucario', picture: Lucario, status: 'NEUTRAL' },
                Lucas: { name: 'Lucas', picture: Lucas, status: 'NEUTRAL' },
                Lucina: { name: 'Lucina', picture: Lucina, status: 'NEUTRAL' },
                Luigi: { name: 'Luigi', picture: Luigi, status: 'NEUTRAL' },
                Luminary: { name: 'Luminary', picture: Luminary, status: 'NEUTRAL' },
                Man: { name: 'Man', picture: Man, status: 'NEUTRAL' },
                Mario: { name: 'Mario', picture: Mario, status: 'NEUTRAL' },
                Marth: { name: 'Marth', picture: Marth, status: 'NEUTRAL' },
                MegaMan: { name: 'MegaMan', picture: MegaMan, status: 'NEUTRAL' },
                MetaKnight: { name: 'MetaKnight', picture: MetaKnight, status: 'NEUTRAL' },
                Mewtwo: { name: 'Mewtwo', picture: Mewtwo, status: 'NEUTRAL' },
                MiiBrawler: { name: 'MiiBrawler', picture: MiiBrawler, status: 'NEUTRAL' },
                MiiGunner: { name: 'MiiGunner', picture: MiiGunner, status: 'NEUTRAL' },
                MiiSwordfighter: { name: 'MiiSwordfighter', picture: MiiSwordfighter, status: 'NEUTRAL' },
                MinMin: { name: 'MinMin', picture: MinMin, status: 'NEUTRAL' },
                MrGameWatch: { name: 'MrGameWatch', picture: MrGameWatch, status: 'NEUTRAL' },
                Ness: { name: 'Ness', picture: Ness, status: 'NEUTRAL' },
                Olimar: { name: 'Olimar', picture: Olimar, status: 'NEUTRAL' },
                Palutena: { name: 'Palutena', picture: Palutena, status: 'NEUTRAL' },
                Peach: { name: 'Peach', picture: Peach, status: 'NEUTRAL' },
                Pichu: { name: 'Pichu', picture: Pichu, status: 'NEUTRAL' },
                Pikachu: { name: 'Pikachu', picture: Pikachu, status: 'NEUTRAL' },
                PiranhaPlant: { name: 'PiranhaPlant', picture: PiranhaPlant, status: 'NEUTRAL' },
                Pit: { name: 'Pit', picture: Pit, status: 'NEUTRAL' },
                PokemonTrainer: { name: 'PokemonTrainer', picture: PokemonTrainer, status: 'NEUTRAL' },
                RichterBelmont: { name: 'RichterBelmont', picture: RichterBelmont, status: 'NEUTRAL' },
                Ridley: { name: 'Ridley', picture: Ridley, status: 'NEUTRAL' },
                ROB: { name: 'ROB', picture: ROB, status: 'NEUTRAL' },
                Robin: { name: 'Robin', picture: Robin, status: 'NEUTRAL' },
                RosalinaLuma: { name: 'RosalinaLuma', picture: RosalinaLuma, status: 'NEUTRAL' },
                Roy: { name: 'Roy', picture: Roy, status: 'NEUTRAL' },
                Ryu: { name: 'Ryu', picture: Ryu, status: 'NEUTRAL' },
                Samus: { name: 'Samus', picture: Samus, status: 'NEUTRAL' },
                Sheik: { name: 'Sheik', picture: Sheik, status: 'NEUTRAL' },
                Shulk: { name: 'Shulk', picture: Shulk, status: 'NEUTRAL' },
                SimonBelmont: { name: 'SimonBelmont', picture: SimonBelmont, status: 'NEUTRAL' },
                Snake: { name: 'Snake', picture: Snake, status: 'NEUTRAL' },
                Sonic: { name: 'Sonic', picture: Sonic, status: 'NEUTRAL' },
                Terry: { name: 'Terry', picture: Terry, status: 'NEUTRAL' },
                ToonLink: { name: 'ToonLink', picture: ToonLink, status: 'NEUTRAL' },
                Villager: { name: 'Villager', picture: Villager, status: 'NEUTRAL' },
                Wario: { name: 'Wario', picture: Wario, status: 'NEUTRAL' },
                WiiFitTrainer: { name: 'WiiFitTrainer', picture: WiiFitTrainer, status: 'NEUTRAL' },
                Wolf: { name: 'Wolf', picture: Wolf, status: 'NEUTRAL' },
                Yoshi: { name: 'Yoshi', picture: Yoshi, status: 'NEUTRAL' },
                YoungLink: { name: 'YoungLink', picture: YoungLink, status: 'NEUTRAL' },
                Zelda: { name: 'Zelda', picture: Zelda, status: 'NEUTRAL' },
                ZeroSuitSamus: { name: 'ZeroSuitSamus', picture: ZeroSuitSamus, status: 'NEUTRAL' },

                BanjoKazooie: { name: 'BanjoKazooie', picture: BanjoKazooie, status: 'NEUTRAL' },
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