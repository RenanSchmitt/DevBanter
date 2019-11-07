function PostsDAO(connection){
    this._connection = connection
}

PostsDAO.prototype.getPosts =  function(callback){
    this._connection.query('select * from posts ORDER BY date DESC ', callback);
}

PostsDAO.prototype.getPostage = function(callback) {
    this._connection.query('select * from posts where id = 3', callback);       
}

PostsDAO.prototype.savePostage = function(newpost, callback){
    var date = new Date();
    var post = `INSERT INTO posts (title, content, date, author, category) VALUES ('${newpost.title}','${newpost.content}', NOW(), 'Renan Schmitt','Tecnologia')`;       
    this._connection.query(post, callback);       
}

module.exports = function(){
    return PostsDAO;
}