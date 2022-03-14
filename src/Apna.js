import React from "react";
import { Button, List, Avatar, Spin } from 'antd';
class ApnaComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { products: [], isLoading: true }
    }
    componentDidMount() {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(res => {
            this.setState({ products: res }, () => {
                this.setState({ isLoading: false })
            })

        })
    }
    render() {

        return (<>
            {this.state.isLoading && <Spin size="large" />}

            <List
                itemLayout="horizontal"
                dataSource={this.state.products}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={item.image} />}
                            title={<a href="https://ant.design">{item.title}</a>}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
        </>)
    }
}

export default ApnaComponent;