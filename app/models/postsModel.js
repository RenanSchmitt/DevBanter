module.exports = function(){
    
    this.getPosts(connection, callback){
        connection.query(`SELECT * FROM posts`, callback);
    }
    return this;
}