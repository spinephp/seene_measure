import { Yrrdb, AItem } from 'src/app/commons/provider/yrrdb';

export interface LevelDataProperty {
    id: string;
    levelid: string[];
    x: string[];
    y: string;
    time: string;
}

export class ALevelData extends AItem<LevelDataProperty> {
    constructor(data: LevelDataProperty) {
        super(data);
    }
}

export class LevelData extends Yrrdb<ALevelData, LevelDataProperty> {
    constructor(data: LevelDataProperty[]) {
        super(data, ALevelData);
    }
}
