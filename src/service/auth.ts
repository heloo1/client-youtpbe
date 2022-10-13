import API from '~/network/API';
import { LoginForm } from '~/types/login';

export const fetchLogin = async (data: LoginForm) => {
    return API.post('/signup');
};
