import {create} from 'apisauce';
import {Apis} from '../Api/APIs';

export const ApiMethod = create({
  baseURL: Apis.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept-Language': 'en',
  },
});
ApiMethod.addMonitor(() => {});

export default Apis;

