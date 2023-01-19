import { useContext } from 'react';

import CategoriaContext from '../context/CategoriaProvider';

const useCategorias = 
  () => useContext(CategoriaContext);

export default useCategorias;