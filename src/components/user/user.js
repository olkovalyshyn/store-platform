import s from '../user/user.module.css';

export default function User({ api }) {
  return (
    <div className={s.container}>
      <ul className={s.blockUsers}>
        {api.map(user => {
          return (
            <li key={user.id} className={s.userCard}>
              <h3>
                {user.name.firstname} {user.name.lastname}
              </h3>
              <p>City: {user.address.city}</p>
              <p>tel.: {user.phone}</p>
              <p>email: {user.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
