import './App.css';
import ImageSlider from './components/ImageSlider/ImageSlider';

//? логика карусели в том что у нас есть массив у которого есть индексы. Мы создаём сотояние с изначальным значением 0 и нажимая добавить например мы сначала проверяем - если текущее значение стейта равно фактической длинне массива(а это вычисляется так - массив.length - 1 ) то значит мы на крайнем элементе и мы запускаем цикл по новой перезаписывая сотояние на 0, если значение меньше длинны массива то просто добавляем +1. Еще мы можем оказавшись на последнем элементе останавить функцию return-ом. А в стилях дива есть backgroundImage в значение которого динамической ссылкой подставляется массив далее индекс из стейта и этот стейт служит индексом элемента в массиве.

function App() {
    const slides = [
        { url: 'https://i.ibb.co/3zWDLT0/img1.jpg', title: 'ночь' },
        { url: 'https://i.ibb.co/0sLyTxX/img2.jpg', title: 'пёс' },
        { url: 'https://i.ibb.co/4pPpKp9/img3.jpg', title: 'жека' },
        {
            url: 'https://ic.pics.livejournal.com/ls_online/34828672/500394/500394_original.jpg',
            title: 'арча',
        },
        {
            url: 'https://tuda-suda.net/wp-content/uploads/ala-archa-9.jpg',
            title: 'арча',
        },
    ];

    const containerStyles = {
        width: '700px',
        height: '380px',
        margin: '50px auto',
    };

    return (
        <div>
            <div style={containerStyles}>
                <ImageSlider slides={slides} />
            </div>
        </div>
    );
}

export default App;
