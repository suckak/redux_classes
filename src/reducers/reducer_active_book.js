/**
 * Created by Daniel_Gutierrez on 2/20/2017.
 */

export default function(state = null,action){

    switch (action.type){
        case 'BOOK_SELECTED':
            return action.payload;
            break;
        default:
            return state;
    }

};