export const ADD_DATA = 'AddNewData';

export function addNewDataToReducer(data) {
    console.log('data in action');
    
    return {
        type:ADD_DATA,
        payload:data
    }

    
}
export function filterDataToReducer(id) {
    return {
        type:'FilterData',
        id:id
    }

    
}
export function dellDataToReducer(data) {
    return {
        type:'DellData',
        data:data
    }

    
}