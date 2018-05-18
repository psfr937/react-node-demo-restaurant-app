import { normalize, arrayOf } from 'normalizr';
import { push } from 'react-router-redux'
import { userSchema } from '../schemas';
import Resources from '../constants/Resources';
import { setCookies, removeCookie } from './cookie';
import { setEntities } from './entity';
import { setPages } from './page';
import userAPI from '../api/user';

export const loginUser = ({ token, user }, res = null) => dispatch => {
  console.log('again again ');
  console.log(token);
  console.log(user);
  dispatch(
    setCookies(
      {
        token,
        user
      },
      res
    )
  );
}

export const logoutUser = () =>
  async (dispatch, getState, apiEngine) => {
    console.log(apiEngine);
    try {
      const json = await userAPI(apiEngine).logout();

      /* istanbul ignore next */
      Promise.all([
        dispatch(removeCookie('token')),
        dispatch(removeCookie('user'))
      ]).then(()=> {
          console.log('redirect now!');

          dispatch(push('/'))
        }
      );
    } catch (err) {
      /* istanbul ignore next */
      alert('Logout user fail');
      throw err;
    }
  };

export const setUsers = res => dispatch => {
  const normalized = normalize(res.users, arrayOf(userSchema));

  dispatch(setEntities(normalized));
  dispatch(setPages(Resources.USER, res.page, normalized.result));
};
