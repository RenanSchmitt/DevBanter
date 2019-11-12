function PostsDAO(connection){
    this._connection = connection
}

PostsDAO.prototype.getPosts =  function(callback){
    this._connection.query('select * from posts ORDER BY date DESC ', callback);
}

PostsDAO.prototype.getPostage = function(idProd, callback) {
    this._connection.query(`select * from posts where id = ${idProd}`, callback);       
}

PostsDAO.prototype.getCommentsPostage = function(idProd, callback) {
    this._connection.query(`select * from comments where id_post = ${idProd}`, callback);       
}

PostsDAO.prototype.savePostage = function(newpost, callback){
    var date = new Date();
    var post = `INSERT INTO posts (title, content, date, author, category) VALUES ('${newpost.title}','${newpost.content}', NOW(), 'Renan Schmitt','Tecnologia')`;       
    this._connection.query(post, callback);       
}
PostsDAO.prototype.newComment = function(newcomment, callback){
    var date = new Date();
    var comment = `INSERT INTO comments (author, content, id_post) VALUES ('Admin','${newcomment.commentText}',${newcomment.id_post})`;
    this._connection.query(comment, callback);       
}

module.exports = function(){
    return PostsDAO;
}