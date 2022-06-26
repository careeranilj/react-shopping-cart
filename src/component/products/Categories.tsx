import React, { useState} from 'react';
import { useQuery } from 'react-query'
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import {CategoryProps} from '../../model/product';
 
const Categories = ((props:CategoryProps) => {
  const {handleChange} = props;
  const [categories, setCategories] = useState<string[]>([]);
  
  const handleChangeChild = (
    _event: React.MouseEvent<HTMLElement>,
    categories: string[],
  ) => {
    setCategories(categories);
    handleChange(categories);
  };

  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://fakestoreapi.com/products/categories')
              .then(res =>res.json())
    )

  if (isLoading) return <p>Loading...</p>

  if (error) return  <p>'An error has occurred: ' + error.message</p>
    const listItems = data.map((d:string, i:number) =>
      <ToggleButton key={i} value={d}>{d}</ToggleButton>
    );

  if(data) return (
      <ToggleButtonGroup
          color="primary"
          value={categories}     
          onChange={handleChangeChild}
          >
          {listItems}
      </ToggleButtonGroup>
    
  ); 
  return <React.Fragment/>;
});

const MemoizedCategories = React.memo(Categories);
export default MemoizedCategories;