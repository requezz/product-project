import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './LoginModal.module.scss';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginFormProps {
    className?: string;
    isOpen: boolean;
    isClose: () => void
}

export const LoginModal = ({ className, isOpen, isClose }: LoginFormProps) => (
    <Modal
        className={classNames('', {}, [className])}
        isOpen={isOpen}
        onClose={isClose}
    >
        <LoginForm />
    </Modal>
);
