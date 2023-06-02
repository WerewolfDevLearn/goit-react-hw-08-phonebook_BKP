import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { register, Userlogin } from '../redux/authOps';
export default function HomePage() {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const user2 = {
    email: 'dogidog@dog.com',
    password: 'awsameDof123',
  };

  useEffect(() => {
    dispatch(Userlogin(user2));
  }, [dispatch]);

  return <h1>Hello World</h1>;
}
