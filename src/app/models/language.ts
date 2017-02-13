import { Framework } from './framework';

export class Language {
    name: string;
    isSelected: boolean = false;
    frameworks: Framework[] = [];

    constructor(name: string,
                frameworks: string[]) {

        this.name = name;

        for (let fr of frameworks) {
            this.frameworks.push(new Framework(fr, 0));
        }
    }

}
