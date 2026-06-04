export interface Config {
    port: number;
    dbConfig: DbConfig;
}

export interface DbConfig {
    port: number;
    host: string;
    user: string;
    password: string;
    name: string;
}