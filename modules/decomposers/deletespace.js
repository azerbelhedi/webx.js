function deleteSpace(s){
    var res = "";
    for(var i = 0 ; i < s.length ; i++ ){
        if(s[i] != " "){
            res += s[i] ; 
        }
    }
    return res ;
}

// test
//console.log(deleteSpace("azer belhedi"),"end","second") ;

module.exports = {
    deleteSpace : function(s){
        return deleteSpace(s) ;
    }
}