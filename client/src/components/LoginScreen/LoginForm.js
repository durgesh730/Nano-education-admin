//mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Background from '../assets/login1.png';
// mui
import { Link, useNavigate } from 'react-router-dom';

// component
import { handleLogin } from '../api'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {

        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const form = {
            email: data.get('email'),
            password: data.get('password'),
        }

        handleLogin(form)
            .then((res) => {
                if (res.status === 200) {
                    navigate('/dashboard')
                }
            }).catch((err) => {
                console.log(err);
            })
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh', }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${Background})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: "90%",
                        // borderRadius:"1rem"
                    }}
                />

                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 11,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2rem'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: '#232354' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h4" color={"#232354"} fontStyle={"Poppins"}>
                            Login 
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                             sx={{ mt: 8, mb: 2 }}
                                margin="normal"
                                size='small'
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />

                            <TextField
                                margin="normal"
                                size='small'
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <FormControlLabel
                             sx={{ mt: 1, mb: 1}}
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            />
                            <br></br>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                
                                sx={{ mt: 3, mb: 4 ,bgcolor: '#232354'}}
                              
                            >
                                LOGIN 
                            </Button>

                            <Grid container>
                                <Grid item xs><Link to={"/forgotPassword"} variant="body2">Forgot password?</Link></Grid>
                                <Grid><Link to={"/register"} sx={{ cursor: "pointer",bgcolor: '#232354' }}>{"Don't have an account?"} <br></br>{"Sign Up"}</Link></Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
}

export default Login;