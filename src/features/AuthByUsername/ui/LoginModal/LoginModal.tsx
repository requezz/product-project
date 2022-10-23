import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal/Modal';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

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
        <Suspense fallback={<Loader />}>
            <LoginFormAsync onSuccess={isClose} />
        </Suspense>
    </Modal>
);
