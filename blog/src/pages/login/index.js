import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import {
    LoginWrapper,
    LoginTitle,
    SignIn,
    SignUp,
    LoginBox,
    Input,
    Button,
} from './style.js'

class Login extends React.PureComponent {
    render() {
        const { login, isLogin } = this.props;
        // 未登陆渲染登陆页,已登陆,跳转到首页
        if (!isLogin) {
            return (
                <LoginWrapper>
                    <LoginBox>
                        <LoginTitle>
                            <Link  to="/login">
                                <SignIn>登陆</SignIn>
                            </Link>
                            <Link to="/register">
                                <SignUp >注册</SignUp>
                            </Link>
                        </LoginTitle>
                        <Input placeholder="账号" ref={input => this.account = input} />
                        <Input placeholder="密码" type="password" ref={input => this.password = input} />
                        <Button
                            onClick={() => login(this.account, this.password)}
                        >登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        }

        return <Redirect to="/" />
    }
}

const mapStateToProps = state => ({
    isLogin: state.getIn(['login', 'isLogin'])
});

const mapDispatchToProps = dispatch => ({
    login(account, password) {
        dispatch(actionCreators.login(account.value, password.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);