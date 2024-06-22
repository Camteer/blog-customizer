import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

type ArrowProps = {
	isMenuOpen: boolean;
	handleOpenForm: OnClick;
};

export const ArrowButton = ({ isMenuOpen, handleOpenForm }: ArrowProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			onClick={handleOpenForm}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx({
				[styles.container]: true,
				[styles.containerOpen]: isMenuOpen,
			})}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx({
					[styles.arrow]: true,
					[styles.arrowOpen]: isMenuOpen,
				})}
			/>
		</div>
	);
};
