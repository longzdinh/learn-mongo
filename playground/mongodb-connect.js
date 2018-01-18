const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
    if (err) return console.log('Unable to connect to database server');
   console.log('Connected to MongoDB server');

//    db.collection('Todos').insertOne({
//         text: 'Something to do',
//         completed: false     
//    }, (err,result) => {
//        if (err) return console.log('unable to insert todo');
//       console.log(JSON.stringify(result.ops, undefined, 2));
//    });

    // db.collection('User').insertOne({
    //     name: "Long",
    //     age: 28,
    //     location: "Vietnam"
    // }, (err,result) => {
    //     if (err) return console.log("unable to insert User");
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

   db.collection('Todos').find(
       new ObjectID('5a60179d5b1262d3b53580a8')
   ).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2));
   }, (err) => console.log('unable to fetch err'));

    // db.close();
});