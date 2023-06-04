import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { getCurrent, register, userlogin, logOut } from '../redux/authOps';
import { useSelector } from 'react-redux';
import usePHBState from '../redux/selectors';
export default function HomePage() {
  const dispatch = useAppDispatch();
  const state = usePHBState();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const user1 = {
  //   // name: 'batfff',
  //   email: 'batfff@bat.com',
  //   password: 'batDog123fff',
  // };
  // const user2 = {
  //   email: 'dogidog1@dog.com',
  //   password: 'awsameDof123',
  // };

  useEffect(() => {
    // dispatch(register(user1));
    // dispatch(userlogin(user1));
    // dispatch(getCurrent());
    // dispatch(logOut());
    // console.log(state);
  }, [dispatch]);

  return <h1>Hello World</h1>;
}
