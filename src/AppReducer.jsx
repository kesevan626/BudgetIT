/* eslint-disable import/no-anonymous-default-export */
export default (state, action)=> {
	switch(action.type) {
		case 'DELETE_PRODUCT':
		return {
			...state,
			Product: state.transactions.filter(product => product.id !== action.payload)
		}
		case 'ADD_PRODUCT':
		return {
			...state, 
			products: [action.payload, ...state.products]
		}
		default:
			return state;
	}
}