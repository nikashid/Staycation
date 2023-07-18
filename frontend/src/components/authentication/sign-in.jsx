import { Link } from "react-router-dom";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Input, Space, Card, Button } from 'antd';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignIn(props) {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm();
    const onSubmit = data => {
        axios.post("http://localhost:3000/user/signin", { data: data }, { withCredentials: true }).then(res => {
            navigate("/")
        }).catch(err => {
            console.log("error", err);
        })
    };

    return (
        <div className="LoginSpace">
            <Space direction="vertical" size={16}>
                <Card style={{ width: 300 }}>
                    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    <div className="cardHeader">
                        <h5 className="card-title">Sign In</h5>
                    </div>
                    <div className="card-body">
                        <form className='loginForm'>
                            <Controller name="email"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input placeholder="Enter User Name.." {...field} />} />
                            <Controller name="password"
                                control={control}
                                rules={{ required: true }}
                                render={({ field }) => <Input type="password" placeholder="Enter password" {...field} />} />
                            <Button type="primary" onClick={handleSubmit(onSubmit)}>Submit</Button>
                            <Link to="/register"><span>register</span></Link>
                        </form>
                    </div>
                </Card>
            </Space>
        </div>
    )
}