# Cassandra migration

## USAGE

1. Required module: ``` cassandra-migration ```
    * Link: ```https://www.npmjs.com/package/cassandra-migration```
    * Installation: ``` npm install cassandra-migration ```
    * Execution: Run script ```cassandra-migration migrate.json```
    
    > Note: By default the script will look for a file named ```migrate.json```

2. Config file
    * Example: 
    ```
    {
        "migrationsDir": "cassandra/schema/migrations",
        "quiet": false,
        "cassandra": {
        "contactPoints": [ "127.0.0.1" ],
        "keyspace": "testing",
        "protocolOptions": {
            "port": 9042
            }  
        }
    }
    ```
    > Note: "migrationsDir" is directory which contains cassandra migration script file.

3. Cassandra migration script file

    > Each cassandra script file should follow the format ```<VERSION>__<TITLE>.cql```
    > Each query statement within the file should be seperated by three hyphens: ```---```
    Example:
    ```
    CREATE TABLE testing.testing_teams (
    id UUID PRIMARY KEY,
    firstname TEXT,
    lastname TEXT,
    teams map<int, TEXT>
    );
    ---
    CREATE TABLE testing.testing_category (
        id UUID PRIMARY KEY,
        category TEXT,
        lastname TEXT,
        points int
    );
    ---
    CREATE TABLE testing.rank_by_year_and_name (
        race_year int,
        race_name TEXT,
        rank int,
        cyclist_name TEXT,
        PRIMARY KEY((race_year, race_name), rank)
    );
    ---
    CREATE TABLE testing.upcoming_calendar (
        year int,
        month int,
        events list<TEXT>,
        PRIMARY KEY (year, month)
    );
    ---
    CREATE TABLE testing.testing_career_teams (
        id UUID PRIMARY KEY,
        lastname TEXT,
        teams set<TEXT>
    );
    ```