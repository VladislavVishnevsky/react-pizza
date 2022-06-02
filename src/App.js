import './scss/app.scss';
import Header from './header/Header';
import Categories from './categories/Categories';
import Sort from './sort/sort';
import PizzaBlock from './pizzaBlock/PizzaBlock';

function App() {
	return (
		<div class="wrapper">
			<div className='block1'>
				<div className='text2'>
					<div className='hello3'>
						TEST INFO
					</div>
				</div>
			</div>
			<Header />
			<div class="content">
				<div class="container">
					<div class="content__top">
						<Categories />
						<Sort />
					</div>
					<h2 class="content__title">Все пиццы</h2>
					<div class="content__items">
						<PizzaBlock title='Чизбургер-пицца' price='от 395 ₽' />
						<PizzaBlock title='Сырная' price='от 450 ₽' />
						<PizzaBlock title='Креветки по-азиатски' price='от 320 ₽' />
						<PizzaBlock title='Сырный цыпленок' price='от 550 ₽' />
						<PizzaBlock title='Маргаритта' price='от 399 ₽' />
						<PizzaBlock title='Барбекю' price='от 260 ₽' />
						<PizzaBlock title='Цезарь' price='от 275 ₽' />
						<PizzaBlock title='Гавайская' price='от 345 ₽' />
						<PizzaBlock title='Хот-дог' price='от 520 ₽' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
