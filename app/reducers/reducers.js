import moment from 'moment';

const initialState = {
  visible: false,
  inc: 0,
  date: moment().format('MMM DD'),
  todayAlert: `You are Beautyful${moment().format('MMM DD').substring(3)}`
};

function spinnerHandler(state = initialState, action) {
	switch(action.type) {
		case 'SHOW-SPINNER':
			return {
				...state,
				visible: action.visible,
			};
			break;
		case 'HIDE-SPINNER':
			return {
				...state,
				visible: action.visible,
			};
			break;
		case 'INC':
			return {
				...state,
				inc: action.inc || 0,
				date: action.date,
				todayAlert: action.todayAlert,
			};
			break;
		default:
		return state;
	}
}

export default spinnerHandler;
