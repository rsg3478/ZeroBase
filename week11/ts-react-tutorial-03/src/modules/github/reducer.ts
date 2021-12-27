import { createReducer } from 'typesafe-actions';
import { GithubState, GithubAction } from './types';
import { GET_USER_PROFILE, GET_USER_PROFILE_SUCCESS, GET_USER_PROFILE_ERROR } from './actions';
import { asyncState, createAsyncReducer, transformToArray } from '../../lib/reducerUtils';
import { getUserProfileAsync } from '.';

// const initialState: GithubState = {
//     userProfile: {
//         loading: false,
//         error: null,
//         data: null
//     }
// };

// const github = createReducer<GithubState, GithubAction>(initialState, {
//     [GET_USER_PROFILE]: (state) => ({
//         ...state,
//         userProfile: {
//             loading: true,
//             error: null,
//             data: null
//         }
//     }),
//     [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//         ...state,
//         userProfile: {
//             loading: false,
//             error: null,
//             data: action.payload
//         }
//     }),
//     [GET_USER_PROFILE_ERROR]: (state, action) => ({
//         ...state,
//         userProfile: {
//             loading: false,
//             error: action.payload,
//             data: null
//         }
//     })
// });

const initialState: GithubState = {
    userProfile: asyncState.initial()
};
  
// const github = createReducer<GithubState, GithubAction>(initialState, {
//     [GET_USER_PROFILE]: state => ({
//       ...state,
//       userProfile: asyncState.load()
//     }),
//     [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
//       ...state,
//       userProfile: asyncState.success(action.payload)
//     }),
//     [GET_USER_PROFILE_ERROR]: (state, action) => ({
//       ...state,
//       userProfile: asyncState.error(action.payload)
//     })
// });

// const github = createReducer<GithubState, GithubAction>(
//     initialState
// ).handleAction(
//     [
//         getUserProfileAsync.request, 
//         getUserProfileAsync.success, 
//         getUserProfileAsync.failure
//     ],
//     createAsyncReducer(getUserProfileAsync, 'userProfile')
// );

const github = createReducer<GithubState, GithubAction>(
    initialState
).handleAction(
    transformToArray(getUserProfileAsync),
    createAsyncReducer(getUserProfileAsync, 'userProfile')
);

export default github;