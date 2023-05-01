const Profile = () => {
    return (
        <div className='content'>
            <div className='content__main-image'>
                <img src='https://mobimg.b-cdn.net/v3/fetch/bd/bda255a936d1aba03440aae775801642.jpeg' />
            </div>
            <div className='profile content__profile'>
                <div className='profile__avatar'>
                    <img src='https://thuthuatnhanh.com/wp-content/uploads/2020/09/hinh-avatar-trang-mat-he.jpg' />
                </div>
                <div className='profile__description'>
                    <h2>Мое Имя</h2>
                    <ul>
                        <li>Дата рождения: 18 июля 1989 года</li>
                        <li>Город: Москва</li>
                        <li>Образование: 9 классов </li>
                    </ul>
                </div>
            </div>
            <div className='posts'>
                <h2>Мои посты</h2>
                <form>
                    <input></input>
                    <button type='send'>Отправить</button>
                </form>
                <ul>
                    <li><a href="#">Пост 1</a></li>
                    <li><a href="#">Пост 2</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile;
