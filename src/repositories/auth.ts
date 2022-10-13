import { LoginForm } from '~/types/login';
import { fetchLogin } from '~/service/auth';
export const getLogin = async (data: LoginForm) => {
    const response = await fetchLogin(data);
    return response.data;
};
