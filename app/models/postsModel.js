module.exports = function(){
    
    this.getPosts = function(connection, callback){
        connection.query('select * from posts ORDER BY date DESC ', callback);
    }

    this.getPostage = function(connection, callback) {
        connection.query('select * from posts where id = 3', callback);       
    }

    
    this.savePostage = function(newpost, connection, callback){
        // connection.query('insert into posts set ?',newpost, callback);
        var post = `INSERT INTO posts (title, content, date, author, category) VALUES ('${newpost.title}','${newpost.content}', NOW(), 'Renan Schmitt','Tecnologia')`;   
        console.log(post)
        
        connection.query(post, callback);       

    }
    return this; 
}