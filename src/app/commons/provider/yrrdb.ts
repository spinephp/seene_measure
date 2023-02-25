
export class AItem<T> {
    private xitem?: T;
    get item(): T|undefined { return this.xitem; }
    constructor(data?: T) {
        this.xitem = data;
    }
    public attribute() {
        return Object.keys(this.xitem as unknown as object);
    }

    value(name: string) {
        let result: any = null;
        if (this.item !== null && this.attribute().indexOf(name) > -1) {
            result =  this.item![name as keyof typeof this.item];
        }
        return result;
    }
}

export abstract class Yrrdb<T, U> {
    protected xdata: T[];
    get data(): T[] { return this.xdata; }
    protected xcurrent!: object;
    private sitem: string;
    constructor(data: U[], aClass: new (U: any) => T) {
        this.xdata = [];
        for (const rec of data) {
            this.xdata.push(create<T, U>(aClass, rec));
        }
        this.sitem = 'item';
    }

    public find(id: number): T|undefined {
        const cid = +id;
        for (const rec of this.xdata) {
            const item = +rec[this.sitem as keyof typeof rec];
            if ((item as unknown as {id:number,}).id===cid) {
            return rec;
            }
        }
        return undefined;
    }

    public findByAttribute(name: string, value: any): T|undefined {
        let result: T|undefined;
        if (name && value && this.data.length > 0) {
            const _data = this.data[0];
            const item = _data[this.sitem as keyof typeof _data];
            const keys = Object.keys(item as Object);
            if (keys.indexOf(name) > -1) {
                const str = value.toString();
                for (const aitem of this.data) {
                    const _aitem = aitem[this.sitem as keyof typeof aitem];
                    const _str = _aitem[name as keyof typeof _aitem];
                    if ((_str as unknown as any).toString() === str) {
                        result = aitem;
                        break;
                    }
                }
            }
        }
        return result;
    }

    public findAllByAttribute(name: string, value: any): T[] {
        const result: T[] = [];
        if (name && value && this.data.length > 0) {
            const _data = this.data[0];
            const item = _data[this.sitem as keyof typeof _data];
            const keys = Object.keys(item as Object);
            if (keys.indexOf(name) > -1) {
                const str = value.toString();
                for (const aitem of this.data) {
                    const _aitem = aitem[this.sitem as keyof typeof aitem];
                    const _str = _aitem[name as keyof typeof _aitem];
                    if ((_str as unknown as any).toString() === str) {
                        result.push(aitem);
                    }
                }
            }
        }
        return result;
    }

    public append(item: U, aClass: new (U: any) => T) {
        this.xdata.push(create<T, U>(aClass, item));
    }
}

function create<T, U>(c: new(U: any) => T, data: U): T {
    return new c(data);
}

function create1<T>(c: new() => T): T {
    return new c();
}

