import './styles.scss';

export const UserInfo = () => {
    return (
        <div className='user-info'>
            <img className='user-info__avatar' src="/assets/avatar.png" alt="user-avatar" />
            <div>
                <h2 className='user-info__name'>evano</h2>
                <p className='user-info__position'>project manager</p>
            </div>
        </div>
    );
}
