import { Yrrdb, AItem } from 'src/app/commons/provider/yrrdb';

export interface LevelProperty {
    id: string;
    names: string[];
    device: string[];
    firsttime: string;
    lasttime: string;
    version: string;
    state: string;
}

export class ALevel extends AItem<LevelProperty> {
    constructor(data: LevelProperty) {
        super(data);
    }
}

export class Level extends Yrrdb<ALevel, LevelProperty> {
    constructor(data: LevelProperty[]) {
        super(data, ALevel);
    }
}
