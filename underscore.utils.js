/************************************************************************
 * Additional utility functions for Underscore.js
 * @author: Michael Kane (@marclar)
 * @license: Doowutchyalike */

_.mixin({
    
    /************************************************************************
     * Move an object from one array to another 
     * @param {Array} src 
     * @param {Array} dest
     * @param {Function} matcher 
     * @param {Array.<{Object}>} The matched objects */
    swap: function(src, dest, matcher){
        
        //ADD MATCHING OBJECTS TO DESTINATION
        var matches = [];
        var match_indexes = [];
        for(var i = 0, j = src.length; i < j; i++){
            if(matcher.call(this, src[i])){
                matches.push(src[i]);
                match_indexes.push(i);
                dest.push(src[i]);
            }
        }
        
        //REMOVE MATCHING OBJECTS FROM src
        for(var i = 0, j = match_indexes.length; i < j; i++){
            
            //EACH TIME WE REMOVE AN ITEM, THE REMAINING INDEXES ARE OFF BY i
            var index = match_indexes[i] - i; 
            
            src.splice(index, 1);
            
        }
        
        //RETURN MATCHES
        return matches;
        
    }
    
});
