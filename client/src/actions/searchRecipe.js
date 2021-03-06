import axios from 'axios';
import { setFetching, unsetFetching } from './fetching';
import {
  SEARCH_RECIPES,
  SHOW_PAGINATION,
  SEARCH_RECIPES_ERROR
} from './actionTypes';


// action creator
export const search = recipes => ({
  type: SEARCH_RECIPES,
  recipes
});

export const pagination = details => ({
  type: SHOW_PAGINATION,
  details
});

export const searchError = message => ({
  type: SEARCH_RECIPES_ERROR,
  message
});

const searchRecipes = (searchQuery, page) => (dispatch) => {
  const pageNumber = page || 1;
  dispatch(setFetching());
  return axios({
    method: 'POST',
    url: `/api/v1/recipes/search?search=${searchQuery}&page=${pageNumber}`
  })
    .then((response) => {
      const {
        currentPage, limit, numberOfItems, pages, recipes
      } = response.data;
      const paginationInfo = {
        currentPage, limit, numberOfItems, pages
      };
      dispatch(search(recipes));
      dispatch(pagination(paginationInfo));
      dispatch(unsetFetching());
    })
    .catch((error) => {
      const { message } = error.response.data;
      dispatch(searchError(message));
      dispatch(unsetFetching());
    });
};

export default searchRecipes;

