
export class Framework {
    name: string;
    isSelected: boolean = false;
    hoursOfExperience: number;

    constructor(name: string, hoursOfExperience: number) {
        this.name = name;
        this.hoursOfExperience = hoursOfExperience;
    }
}
