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

3. Cassandra migration script file