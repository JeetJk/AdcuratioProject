import * as opsService from './Ops'
import * as dataConstants from '../constants/Data.constant'
import AsyncStorage from '@react-native-async-storage/async-storage';

const apiGetCall = async (url) => {
    try {
        let token = await AsyncStorage.getItem('token')
        let result = await opsService.getData(dataConstants.base.api + url, token);
        return result;
    } catch (e) {
        return { status: false, data: {}, message: e.message }
    }
}

export {
    apiGetCall

}