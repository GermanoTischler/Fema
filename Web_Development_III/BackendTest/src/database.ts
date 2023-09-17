import fs from "node:fs/promises"

const databasePath = new URL('../db.json', import.meta.url)

interface IDatebase {
    id:string,
    name:string,
    email:string
}

export class Database {

    #database:IDatebase[][] = [];

    constructor() {
        fs.readFile(databasePath, 'utf8')
        .then(data => {
            this.#database = JSON.parse(data);
        }).catch(() => {
            this.#persist();
        });
    }

    #persist() {
        fs.writeFile(databasePath, JSON.stringify(this.#database, null, 2))
    };

    select(table:any, id?:string):IDatebase[] {

        let data:any = this.#database[table] ?? [];

        if(id) {
            data = data.find((row:any) => {
                return row.id === id});
        }

        return data;
    };

    insert(table:any, data:IDatebase):IDatebase {
        if (Array.isArray(this.#database[table])) {
            this.#database[table].push(data);
            this.#persist();
        } else {
            this.#database[table] = [data];
        }

        return data;
    };

    delete(table:any, id:string):void {
        const rowIndex = this.#database[table].findIndex((row:any) => row.id === id);

        if(rowIndex > -1) {
            this.#database[table].splice(rowIndex, 1);
            this.#persist();
        }
    };

    update(table:any, id:string, data:IDatebase):void {
        const rowIndex = this.#database[table].findIndex(
            (row:any) => row.id ===id);

        if(rowIndex > -1) {
            this.#database[table][rowIndex] = data;
            this.#persist()
        }

    };

};