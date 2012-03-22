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
        
    },
    
    /************************************************************************
     * Pluralizes a word by appending an 's' unless count == 1. Also tries to
     *  handle odd English words such as 'person/people' and 'is/are'
     * @param {string} word 
     * @param {Array} count 
     * @return {string} */
    plural: function(word, count){
        
        //DICTIONARY OF EXCEPTIONAL WORDS
        var dict = {
            person: 'people',
            is: 'are',
            has: 'have'
        };
        
        //IS WORD IN DICTIONARY?
        var in_dict = dict[word] || (function(){
            var result = false;
            for(name in dict){
                if(dict[name] == word){
                    result = true;
                    break;
                }
            }
            return result;
        })();
        
        //RETURN PLURAL VERSION
        return in_dict ? 
            (count == 1 ? word : dict[word]) : 
            (word + (count != 1 ? 's' : ''));
        
    }
    
});
