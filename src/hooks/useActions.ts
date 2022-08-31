import { allActionCreators } from './../store/reducers/actionCreators';
import { AppDispatch } from './../store/index';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';



export const useActions = () => {
  const disaptch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, disaptch);
};