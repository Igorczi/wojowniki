import React from 'react'
import * as ui from "./WarriorUI"
interface WarriorProps {
    name: string
    skill: string
    description: string
    number: number
}
const Warrior = ({name, skill, description, number}:WarriorProps) => {
    return (
        <ui.WarriorWrapper>
            <ui.WarriorAtributes>{name}            </ui.WarriorAtributes>
            <ui.WarriorAtributes>{skill}            </ui.WarriorAtributes>
            <ui.WarriorAtributes>{description}            </ui.WarriorAtributes>
            <ui.WarriorAtributes>{number}            </ui.WarriorAtributes>
        </ui.WarriorWrapper>
    )
}
export default Warrior;