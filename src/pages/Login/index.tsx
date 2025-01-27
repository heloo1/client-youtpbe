import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { useMutation, useQuery } from 'react-query';
import API from '~/network/API';
import useAuthStore from '~/store/useAuthStore';
import { LoginForm, LoginResponse } from '~/types/login';
import { getLogin } from '~/repositories/auth';
import { AxiosError } from 'axios';
import { ResponseAPI } from '~/app/response';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();
interface IData {
    email: string;
    password: string;
}
export default function SignInSide() {
    const navigate = useNavigate();
    const setUser = useAuthStore((state) => state.setUser);
    // let navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginForm>({
        defaultValues: {
            email: 'emil@gmail.com',
            password: '123456',
        },
    });
    // const query = useQuery('todos', getTodos);
    const queryLogin = async (data: IData) => {
        try {
            const res = await API.post('/api/auth/signin', data);
            console.log('vao day r ');
            localStorage.setItem('accessToken', res.data.accessToken);
            setUser(res.data.user);

            console.log('reeas', res);
            navigate('/');
        } catch (err) {
            console.log(err);
        }
    };
    const submit = (data: IData) => {
        console.log('data', data);
        queryLogin(data);
    };
    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Đăng nhập
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit(submit)}
                            sx={{ mt: 1, width: '100%' }}
                        >
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                type="email"
                                label="Email "
                                autoComplete="email"
                                autoFocus
                                {...register('email', {
                                    required: 'Please enter your email.',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'invalid email address',
                                    },
                                })}
                            />
                            {errors.email && (
                                <p style={{ color: 'red', margin: 3 }}>
                                    {errors.email.message}
                                </p>
                            )}

                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                label="Mật khẩu"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                {...register('password', {
                                    required: 'Please enter your password.',
                                })}
                            />
                            {errors.password && (
                                <p style={{ color: 'red', margin: 3 }}>
                                    {errors.password.message}
                                </p>
                            )}

                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Ghi nhớ đăng nhập"
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Đăng nhập
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Quên mật khẩu ?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/register" variant="body2">
                                        {'Chưa có tài khoản? Đăng ký ngay'}
                                    </Link>
                                </Grid>
                            </Grid>
                            {/*<Copyright sx={{ mt: 5 }} />*/}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}
