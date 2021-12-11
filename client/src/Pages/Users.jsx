import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUsers } from '../store/actions/users';

export default function Users() {
  const dispatch = useDispatch();
  const { users, isLoading, error } = useSelector(state => state.users);

  useEffect(() => {
    console.log('use effect');
    dispatch(setUsers());
  }, []);

  if (isLoading) {
    return (
      <div>
        <h1>Loading ...</h1>
      </div>
    )
  } else {
    return (
      <div>
        <h1>User</h1>
        <p>{JSON.stringify(users)}</p>
      </div>
    )
  };
};
