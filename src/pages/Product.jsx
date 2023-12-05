import Header from '../components/Header';
import ProductHeader from '../components/ProductHeader';
import '../styles/pages/_Product.scss';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const product = () => {
  return (
    <div className="product">
      <Header />
      <div className="breadcrumbs">
        <Breadcrumbs aria-label="breadcrumb" color="white">
          <Link underline="hover" color="white" href="/">
            خانه
          </Link>
          <Link underline="hover" color="white">
            محصولات
          </Link>
          <Link underline="hover" color="white">
            عناوین بازی
          </Link>
          <Typography color="white">مورتال کمبت 1</Typography>
        </Breadcrumbs>
      </div>
      <ProductHeader />
    </div>
  );
};

export default product;
