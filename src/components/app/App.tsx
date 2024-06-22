import { CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from 'components/article/Article';
import { ArticleParamsForm } from 'components/article-params-form/ArticleParamsForm';
import styles from '../../styles/index.module.scss';

import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

export const App = () => {
	const [state, setState] = useState<ArticleStateType>(defaultArticleState);

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': state.fontFamilyOption.value,
					'--font-size': state.fontSizeOption.value,
					'--font-color': state.fontColor.value,
					'--container-width': state.contentWidth.value,
					'--bg-color': state.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onChange={setState}></ArticleParamsForm>
			<Article />
		</div>
	);
};
