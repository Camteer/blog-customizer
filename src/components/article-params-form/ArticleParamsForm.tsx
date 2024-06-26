import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from '../select/Select';
import { RadioGroup } from 'components/radio-group';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import {
	ArticleStateType,
	OptionType,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
} from 'src/constants/articleProps';
import { Separator } from '../separator/Separator';
import clsx from 'clsx';

type ArticleParamsFormProps = {
	onChange: (selected: ArticleStateType) => void;
};

export const ArticleParamsForm = ({ onChange }: ArticleParamsFormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [formState, setFormState] =
		useState<ArticleStateType>(defaultArticleState);

	function handleFormState(data: OptionType, name: keyof ArticleStateType) {
		setFormState((prev) => ({ ...prev, [name]: data }));
	}

	function handleOnSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onChange(formState);
	}

	function handleOnReset(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		onChange(defaultArticleState);
		setFormState(defaultArticleState);
	}

	function handleOnOpen(): void {
		setIsOpen(!isOpen);
	}

	return (
		<>
			<ArrowButton handleOpenForm={handleOnOpen} />
			<aside
				className={clsx({
					[styles.container]: true,
					[styles.containerOpen]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleOnSubmit}
					onReset={handleOnReset}>
					<Text as={'h2'} dynamic={false} size={31} weight={800} uppercase>
						{'Задайте параметры'}
					</Text>
					<Select
						selected={formState.fontFamilyOption}
						options={fontFamilyOptions}
						onChange={(e) => {
							handleFormState(e, 'fontFamilyOption');
						}}
						title='Шрифт'></Select>
					<RadioGroup
						name={'Размер шрифта'}
						options={fontSizeOptions}
						selected={formState.fontSizeOption}
						onChange={(e) => {
							handleFormState(e, 'fontSizeOption');
						}}
						title='Размер Шрифта'></RadioGroup>
					<Select
						selected={formState.fontColor}
						options={fontColors}
						title='Цвет шрифта'
						onChange={(e) => {
							handleFormState(e, 'fontColor');
						}}></Select>
					<Separator></Separator>
					<Select
						selected={formState.backgroundColor}
						options={backgroundColors}
						title='Цвет фона'
						onChange={(e) => {
							handleFormState(e, 'backgroundColor');
						}}></Select>
					<Select
						selected={formState.contentWidth}
						options={contentWidthArr}
						title='Ширина контента'
						onChange={(e) => {
							handleFormState(e, 'contentWidth');
						}}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
