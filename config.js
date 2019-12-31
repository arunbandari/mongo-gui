module.exports = {
    connectTo: "local",
    connections: {
        local: {
            url: process.env.MONGO_DB_HOST || "mongodb://localhost:27017",
            options: {}
        }
    }
}