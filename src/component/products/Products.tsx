import React, {FC, useEffect, useState} from 'react';
import './Products.css';
import {Product as ProductModel} from '../../model/product';
import {ProductService} from '../../service/product.service';
import {getProducts} from '../../service/product.services';
import Product from '../product/Product';
import { QueryClient, QueryClientProvider } from 'react-query'
import Categories from './Categories'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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
interface ProductsProps {
    productService: ProductService;
}

const Products: FC<ProductsProps> = (({productService}) => {
    const classes = useStyles();
    const [products, setProducts] = useState<ProductModel[]>([]);
    const [categories, setCategories] = useState<string[]>([]);

    const handleCategoriesChange = (categories: string[]) => {
      setCategories(categories);
    };

    useEffect(() => {
      getProducts().then(products => setProducts(products));
    }, [productService]);
    

    return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <QueryClientProvider client={queryClient}>
                <Categories handleChange={handleCategoriesChange}/>
            </QueryClientProvider>
           </Paper>
        </Grid>
      </Grid>
      { products.length === 0 ? null :
          <div className='products-container'> 
            {products.filter(product => !categories || categories.length === 0 || categories.includes(product.category))
                     .map(product => <Product key={product.id} product={product}/>)}
          </div>}
    </React.Fragment>        
    );
});

export default Products;
