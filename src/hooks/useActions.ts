import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { allActionCreators } from './../store/reducers/actionCreators';
import { AppDispatch } from './../store/index';

export const useActions = () => {
  const disaptch = useDispatch<AppDispatch>();
  return bindActionCreators(allActionCreators, disaptch);
};