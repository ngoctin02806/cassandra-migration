const cassandraDB = require('cassandra-driver');
const generateId = require('generate-safe-id');

try {
    const client = new cassandraDB.Client({ contactPoints: ['127.0.0.1'], localDataCenter: 'datacenter1', keyspace: 'cycling' });

const start = async () => {
    const insertedData = {
        id: `50554d6e-29bb-11e5-b345-feff819cdc9f`,
        category: "fsdfsdfdsfdsf",
        lastname: "Tin",
        points: 45454
    };

    const data1 = {
        year: 2015,
        month: 04,
        events: ['event1', 'event2', 'event3']
    }

    const query1 = 'SELECT * FROM cyclist_category WHERE lastname = ? ALLOW FILTERING';
    const query2 = 'INSERT INTO cyclist_category (id, category, lastname, points) VALUES (?, ?, ?, ?)';
    const query3 = 'UPDATE cyclist_category SET lastname = ? WHERE id = ?';
    
    // Insert a list
    const query4 = 'INSERT INTO upcoming_calendar (year, month, events) VALUES (?, ?, ?)';

    // Update a list
    const query5 = 'UPDATE upcoming_calendar SET events = events + ? WHERE year = ? and month = ?';

    // Get data
    const query6 = 'SELECT json year, month, events FROM upcoming_calendar';

    //await client.execute(query4, [data1.year, data1.month, data1.events], { prepare: true });

    await client.execute(query5, [['event4'], data1.year, data1.month], { prepare: true });

    await client.execute(query3, ['SOUTHERLAND', insertedData.id]);

    // await client.execute(query2, [insertedData.id, insertedData.category, insertedData.lastname, insertedData.points],
    //     { prepare: true });

    const result1 = await client.execute(query1, ['SOUTHERLAND']);

    const result2 = await client.execute(query6);

    console.log(result2.rows[1]);
}

start();
} catch (error) {
    console.error(error);
}