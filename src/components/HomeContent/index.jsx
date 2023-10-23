import {useEffect, useState} from 'react'
import {Layout, Button, theme, Flex, Typography, Divider, Table, Row, Col} from 'antd'
import {DeleteFilled, EditFilled} from '@ant-design/icons'
import {useDispatch} from "react-redux";
import CarEditModal from "../CarEditModal"
import CarDeleteModal from "../CarDeleteModal"
import CarAddModal from "../CarAddModal"
import {getAllCars, setSelectedCar} from "../../redux/carSlice.js";

const {  Content } = Layout
const {Title} = Typography

const HomeContent = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)
    const [deleteCarId, setDeleteCarId] = useState()
    const [cars, setCars] = useState()
    const dispatch = useDispatch()
    const {token: { colorBgContainer }} = theme.useToken()

    useEffect(() => {
        dispatch(getAllCars())
            .then((action) => {
                if (getAllCars.fulfilled.match(action)) {
                    const getAll = action.payload;
                    setCars(getAll);
                    console.log(getAll);
                } else if (getAllCars.rejected.match(action)) {
                    const error = action.error;
                    console.log(error)
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [dispatch])


    const showEditModal = (record) => {
        dispatch(setSelectedCar(record))
        setIsEditModalOpen(true)
    }

    const showDeleteModal = (id) => {
        setDeleteCarId(id)
        setIsDeleteModalOpen(true)
    }

    const showAddModal = () => {
        setIsAddModalOpen(true)
    }

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id'
        },
        {
            title: 'User Firstname',
            dataIndex: 'userFirstName',
            key: 'userFirstName'
        },
        {
            title: 'User Lastname',
            dataIndex: 'userLastName',
            key: 'userLastName'
        },
        {
            title: 'Car Name',
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Brand',
            dataIndex: 'brand',
            key: 'brand',
        },
        {
            title: 'Model',
            dataIndex: 'model',
            key: 'model',
        },
        {
            title: 'Year',
            dataIndex: 'year',
            key: 'year',
        },
        {
            title: 'Plaque',
            dataIndex: 'plaque',
            key: 'plaque',
        },
        {
            title: 'Action',
            key: 'action',
            render: (record) => (
                <Flex justify={"space-around"} >
                    <EditFilled
                        onClick={() => showEditModal(record)}
                        style={{
                            color: "blue",
                            fontSize: "20px"
                        }}
                    />
                    <DeleteFilled
                        onClick={() => {
                            showDeleteModal(record.id)
                        }}
                        style={{
                            color: "red",
                            fontSize: "20px"
                        }}
                    />
                </Flex>
            )
        }
    ]

    return (
        <Content
            style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer
            }}
        >
            <Row>
                <Col span={24}>
                    <Title style={{marginTop: 0}} level={1}>
                        My Cars
                    </Title>
                </Col>
            </Row>
            <Divider/>
            <Row>
                <Col span={24}>
                    <Button
                        type={"primary"}
                        color={"blue"}
                        size={"middle"}
                        onClick={showAddModal}
                        style={{
                            marginBottom: 20
                        }}
                    >
                        Add New Car
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Table
                        columns={columns}
                        dataSource={cars?.data}
                        size={"large"}
                        bordered={true}
                        pagination={{
                            position: ["bottomCenter"],
                            pageSize: 5,
                            showSizeChanger: false,
                            showQuickJumper: true
                        }}
                    />
                </Col>
            </Row>
            <CarEditModal
                isEditModalOpen={isEditModalOpen}
                setIsEditModalOpen={setIsEditModalOpen}
            />
            <CarDeleteModal
                isDeleteModalOpen={isDeleteModalOpen}
                setIsDeleteModalOpen={setIsDeleteModalOpen}
                deleteCarId={deleteCarId}
            />
            <CarAddModal
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
            />
        </Content>
    )
}

export default HomeContent