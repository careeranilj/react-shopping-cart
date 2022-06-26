import React, {FC, useEffect, useState} from 'react';
import './Products.css';
import {Product as ProductModel} from '../../model/product';
import {getProducts} from '../../service/product.service';
import Product from '../product/Product';
import { QueryClient, QueryClientProvider } from 'react-query'
import Categories from './Categories'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';
import MemoizedCategories from './Categories';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const queryClient = new QueryClient()

const Products: FC = (() => {
    const classes = useStyles();
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [categories, setCategories] = useState<string[]>([]);

    const handleCategoriesChange = (categories: string[]) => {
      setCategories(categories);
    };

    useEffect(() => {
      getProducts().then(products => setProducts(products));
    }, []);
    

    return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <QueryClientProvider client={queryClient}>
                <MemoizedCategories handleChange={handleCategoriesChange}/>
            </QueryClientProvider>
           </Paper>
        </Grid>
      </Grid>
      { products.length === 0 ? null :
          <div className='products-container'> 
            {products.filter(product =>_.isEmpty(categories) || categories.includes(product.category))
                     .map(product => <Product key={product.id} product={product}/>)}
          </div>}
    </React.Fragment>        
    );
});
const MemoizedProducts = React.memo(Products);
export default MemoizedProducts;
