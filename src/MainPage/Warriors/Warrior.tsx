import React from "react";
import * as ui from "./WarriorUI";
interface WarriorProps {
    name: string;
    skill: string;
    description: string;
    number: number;
    url: string
}
const Warrior = ({ name, skill, description, number, url }: WarriorProps) => {
    return (
        <ui.WarriorWrapper>
            <ui.WarriorAtributes>{name} </ui.WarriorAtributes>
            <ui.WarriorAtributes>{skill} </ui.WarriorAtributes>
            <ui.WarriorAtributes>{description} </ui.WarriorAtributes>
            <ui.WarriorAtributes>{number} </ui.WarriorAtributes>
            <ui.profilePicture src={url} alt='chuj'/>
        </ui.WarriorWrapper>
    );
};
export default Warrior;
