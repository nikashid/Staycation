import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Space, Card, Button } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import axios from "axios";
//import { useEffect } from 'react';

const url = "http://localhost:3000/user/register";

export default function Register(props) {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();

    const onSubmit = data => {
        axios.post(url, { data: data }).then(res => {
            navigate("/login")
        }).catch(err => {
            console.log("error", err);
        })
    }

    // useEffect(() => {
    //     console.log("effect");

    // }, []);

    return (
        <div className="RegisterSpace">
            <Space direction="vertical" size={16}>
                <Card style={{ width: 300 }}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    <div className="cardHeader">
                        <h5 className="card-title">Register</h5>
                    </div>
                    <div className="card-body">
                        <form className="registerForm">
                            <Controller name="firstName"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input placeholder="First name" {...field} />} />
                            <Controller name="lastName"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input placeholder="Last name" {...field} />} />
                            <Controller name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input placeholder="Email" {...field} />} />
                            <Controller name="password"
                                control={control}
                                rules={{ required: true, minLength: 8 }}
                                render={({ field }) => <Input placeholder="Password" {...field} />} />
                            <Controller name="confirmPassword"
                                control={control}
                                rules={{ required: true, minLength: 8 }}
                                render={({ field }) => <Input placeholder="Confirm password" {...field} />} />
                            <Controller name="gender"
                                control={control}
                                render={({ field }) => <Input placeholder="Gender" {...field} />} />
                            <Button type='primary' onClick={handleSubmit(onSubmit)}>Register</Button>
                        </form>
                    </div>
                </Card>
            </Space>
        </div>
    )
}