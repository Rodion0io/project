import {useState} from "react";

export const useModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    const changeModalState = () => {
        setModalOpen((prevState) => !prevState);
    }

    return { modalOpen, changeModalState }
}
