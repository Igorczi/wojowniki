import React from 'react';
import * as ui from './MainPageUI'
import Warrior from './Warriors/Warrior';
interface MainPageProps {
    warriors: any[];
}

const MainPage = ({ warriors }: MainPageProps) => {
    console.log(warriors)
    return (
        <ui.MainPageWrapper>
            {warriors !== [] ? warriors.map(warrior => {
                return <Warrior description={warrior.description} name={warrior.name} skill={warrior.skill} number={warrior.number} key={warrior.number} />
            }): <div>no warriors yet</div>}
        </ui.MainPageWrapper>
    )
}

export default MainPage;
