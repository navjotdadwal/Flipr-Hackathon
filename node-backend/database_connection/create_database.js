async function main() {
    const mongoString = "mongodb+srv://navjotdadwal:2019UEC1657@cluster0.lbdurre.mongodb.net/?retryWrites=true&w=majority"

    mongoose.connect(mongoString, {useNewUrlParser: true})

    mongoose.connection.on("error", function(error) {
    console.log(error)
    })

    mongoose.connection.on("open", function() {
    console.log("Connected to MongoDB database.")
    })
}
async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
main().catch(console.error);
