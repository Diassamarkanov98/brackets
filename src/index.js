module.exports = function check(str, bracketsConfig) {
 let stackArray = [];

    for( let i = 0; i < str.length; i++ ){
        for ( let bracket of bracketsConfig ) {
            if( str[i] == bracket[0]  && bracket[0] == bracket[1]
                && bracket[0] == stackArray[stackArray.length - 1] ){
                stackArray.pop();
                break;
            }
            if ( str[i] == bracket[0] ){
                stackArray.push( str[i] );
                break;
            }
            if( str[i] == bracket[1] ){
                if( bracket[0] != stackArray.pop() ){
                    return false;
                }
            }
        }
    }
    if( stackArray.length ) return false;
    return true;
}
