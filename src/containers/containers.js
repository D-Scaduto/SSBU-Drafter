import React from 'react';
import './css/styles.css';
import './css/popup.css';

function getTeamOneContainer(characterList) {
    return <div class="team1-container" >
        <div class="section-header">TEAM 1</div>
        <div id="team1-area" class="characterContainerTeam1">
            {
                Object.values(characterList)
                    .filter(character => character.status === "TEAM1" && character.currentRound)
                    .map(character => <CharacterBox name={character.name} picture={character.picture} callBack={this.changeStatus} ></CharacterBox>)
            }
        </div>
    </div>
}

function getTeamTwoContainer(characterList) {
    return <div class="team2-container" >
        <div class="section-header">TEAM 2</div>
        <div id="team2-area" class="characterContainerTeam2">

            {
                Object.values(characterList)
                    .filter(character => character.status === "TEAM2" && character.currentRound)
                    .map(character => <CharacterBox name={character.name} picture={character.picture} callBack={this.changeStatus} ></CharacterBox>)

            }
        </div>
    </div>
}

function getCharacterContainer(characterList) {
    return <div class="characterContainer">
        {
            Object.values(characterList)
                .filter(character => {
                    let searchValue = RegExp(".*" + this.getSearchtext().toLocaleLowerCase() + ".*")
                    return searchValue.test(character.name.toLocaleLowerCase()) && character.status === "NEUTRAL"
                })
                .map(character => <BorderedCharacterBox name={character.name} picture={character.picture} status={character.status}
                    callBack={this.changeStatus} ></BorderedCharacterBox>)
        }
    </div>
}

function getPoolContainer(characterList) {
    return <div class="characterContainerPoolContainer">
        <div class="section-header">POOL</div>
        <div id="pool-area" class="characterContainerPool">
            {
                Object.values(characterList)
                    .filter(character => character.status === "POOL" && character.currentRound)
                    .map(character => <CharacterBox name={character.name} picture={character.picture} callBack={this.changeStatus} ></CharacterBox>)
            }
        </div>
    </div>
}

export { getPoolContainer }
export { getCharacterContainer }
export { getTeamTwoContainer }
export { getTeamOneContainer }