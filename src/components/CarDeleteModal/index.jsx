import {message, Modal, Typography} from "antd";
import {useDispatch} from "react-redux";
import {deleteCar} from "../../redux/carSlice.js";

// eslint-disable-next-line react/prop-types
const CarDeleteModal = ({isDeleteModalOpen,setIsDeleteModalOpen, deleteCarId}) => {
    const [messageApi, contextHolder] = message.useMessage();
    const key = 'deleteCar';
    const dispatch = useDispatch()

    const {Title, Text} = Typography

    const handleDeleteOk = async () => {
        messageApi.open({
            key,
            type: 'loading',
            content: 'The delete is in progress...'
        })

        dispatch(deleteCar({id: deleteCarId}))
    .then((result) => {
            if (result.payload.success) {
                messageApi.open({
                    key,
                    type: 'success',
                    content: 'Delete process successful',
                    duration: 2
                })
                setIsDeleteModalOpen(false)
                window.location.reload()
            }
        })
            .catch((error) => {
                console.log(error)
                messageApi.open({
                    key,
                    type: 'error',
                    content: `Delete process failed. Error :  ${error}`,
                    duration: 2
                })
                setIsDeleteModalOpen(false)
            })
    }

    const handleDeleteCancel = () => {
        setIsDeleteModalOpen(false)
    }

    return (
        <>
            {contextHolder}
            <Modal
                title={<Title level={3}>Delete Car</Title>}
                open={isDeleteModalOpen}
                onOk={handleDeleteOk}
                onCancel={handleDeleteCancel}
            >
                <Text>
                    Are you sure you want to delete this record?
                </Text>
            </Modal>
        </>
    )
}


export default CarDeleteModal