
export interface IParser<T> {
    parse(payload: any): T;

    parseList(payload: any): Array<T>;
}

export abstract class AbstractParser<T> implements IParser<T> {

    abstract parse(payload: any, args?: any): T;

    reparse(payload: any): T {
        return this.parse(payload);
    }

    parseList(payload: any): Array<T> {
        if (!payload || !Array.isArray(payload)) {
            return [];
        }

        return payload.map(p => this.parse(p))
            .filter(p => p);
    }

    reparseList(payload: any): Array<T> {
        if (!payload || !Array.isArray(payload)) {
            return [];
        }

        return payload.map(p => this.reparse(p))
            .filter(p => p);
    }
}