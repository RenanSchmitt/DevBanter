module.exports = function(){
    
    this.getPosts = function(connection, callback){
        connection.query('select * from posts', callback);
    }

    this.getPostage = function(connection, callback) {
        connection.query('select * from posts where id = 3', callback);       
    }
    return this; 
}