import ProductContext from "../../../../_helper/Ecommerce/Product";
import CartContext from "../../../../_helper/Ecommerce/Cart";
import { H4, LI, P, Image, UL } from "../../../../AbstractElements";
import FilterContext from "../../../../_helper/Ecommerce/Filter";
import { getVisibleproducts } from "../../../../Services/Ecommerce.service";
import ProductModal from "./ProductModal";
import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
// import { Row, Card, Button } from "reactstrap";
import CustomizerContext from "../../../../_helper/Customizer";
import { Container, Row, Col } from 'reactstrap';
import WidgetsWrapper from "../../../Dashboard/Default/WidgetsWraper";
const ProductGrid = () => {
  const { addToCart } = useContext(CartContext);
  const { productItem, symbol } = useContext(ProductContext);
  const layoutColumns = 3;
  const { layoutURL } = useContext(CustomizerContext);

  const quantity = 1;
  const [dataid, setDataid] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const history = useNavigate();

  const AddToCarts = (item, quantity) => {
    addToCart(item, quantity);
    history(`${process.env.PUBLIC_URL}/app/ecommerce/cart/${layoutURL}`);
  };

  const onOpenModal = (productId) => {
    setOpenModal(true);
    setDataid(productId);
  };

  const addWishList = () => {
    history(`${process.env.PUBLIC_URL}/app/ecommerce/wishlist/${layoutURL}`);
  };
  var images = require.context("../../../../assets/images", true);
  const dynamicImage = (image) => {
    return images(`./${image}`);
  };
  const context = useContext(FilterContext);
  const products = getVisibleproducts(productItem, context.filter);

  return (
    <Fragment>
    <WidgetsWrapper/>
    </Fragment>
  );
};
export default ProductGrid;
