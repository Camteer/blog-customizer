import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import { useState } from 'react';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowProps = {
	handleOpenForm: OnClick;
};

export const ArrowButton = ({ handleOpenForm }: ArrowProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	function handleOnOpen(): void {
		setIsOpen(!isOpen);
		handleOpenForm();
	}
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={handleOnOpen}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx({
				[styles.container]: true,
				[styles.containerOpen]: isOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({ [styles.arrow]: true, [styles.arrowOpen]: isOpen })}
			/>
		</div>
	);
};
